// Peapod

import wrapper from './wrapper.jsx';
import Vars from './vars.js';
import Styler from './styler.js';

module.exports = {};

window.Pod = {
    options: {},
    wrapper,
};

const init = function init(themeName = 'peapod', ignore = [], themeReq, req) {
    const themeKeys = themeReq.keys();
    const themeLen = themeKeys.length;
    const styleSheets = {};
    const componentNames = {};
    const fileNames = req.keys();

    for (let fileIndex = 0, fileLen = fileNames.length; fileIndex < fileLen; fileIndex++) {
        const fileName = fileNames[fileIndex];
        const splitName = fileName.replace('./', '').split('/');
        let componentName = '';
        let styleName = '';

        if (splitName[0] === themeName) {
            const splitLen = splitName.length;
            const fileType = splitName[splitLen - 1];

            if (fileType === 'component.jsx' || fileType === 'style.js') {
                for (let splitIndex = 1; splitIndex < (splitLen - 1); splitIndex++) {
                    const splitVal = splitName[splitIndex];
                    let splitValUpper = '';

                    if (splitVal.length === 1) {
                        splitValUpper = splitVal.charAt(0).toUpperCase();
                    } else {
                        splitValUpper = splitVal.charAt(0).toUpperCase() + splitVal.slice(1);
                    }

                    if (componentName === '') {
                        componentName = splitValUpper;
                        styleName = splitVal;
                    } else {
                        componentName = `${componentName}_${splitValUpper}`;
                        styleName = `${styleName}_${splitVal}`;
                    }
                }

                if (ignore.indexOf(componentName) === -1) {
                    if (fileType === 'component.jsx') {
                        componentNames[componentName] = fileName;
                    } else if (fileType === 'style.js') {
                        styleSheets[styleName] = {
                            fileName,
                            componentName,
                        };
                    }
                }
            }
        }
    }

    window.Pod_Vars = window.Pod_Vars || Vars;
    window.Pod_Styler = window.Pod_Styler || Styler;

    for (let themeIndex = 0; themeIndex < themeLen; themeIndex++) {
        const themeFileName = themeKeys[themeIndex];
        if (themeFileName.indexOf(`./${themeName}/`) > -1) {
            const theme = themeReq(themeFileName);
            window.Pod_Styler.addLibrary(theme.themeParent, theme.themeName, styleSheets, req, theme.globalVars);
        }
    }

    const componentNameKeys = Object.keys(componentNames);

    for (let componentNameIndex = 0, componentNameLen = componentNameKeys.length; componentNameIndex < componentNameLen; componentNameIndex++) {
        const componentName = componentNameKeys[componentNameIndex];
        const component = req(componentNames[componentName]);
        module.exports[componentName] = wrapper(component);
    }

    return module.exports;
};

if (module.hot) {
    module.hot.accept();
    if (typeof(window._peapodRoot) !== 'undefined') {
        init();
        window._peapodRoot.forceUpdate();
    }
}

const ignoreComponents = [
    '__template',
    'Animation',
    'Core',
];
const themeReq = require.context('./theme', true, /theme.js$/);
const req = require.context('./theme', true, /^\.\/.*\.jsx?$/);

init('peapod', ignoreComponents, themeReq, req);

module.exports.init = init;
