module.exports = function (sheet) {
    sheet.resolveValues = theme => { // eslint-disable-line no-unused-vars
        const component = {
            maxWidth: theme.site.maxWidth,
            width: theme.site.width,
            padding: theme.gutter.internal,
        };
        return component;
    };

    sheet.resolveStyles = (component, theme) => { // eslint-disable-line no-unused-vars
        sheet.selector('.main', {
            maxWidth: component.maxWidth,
            width: component.width,
            margin: '0 auto',
            paddingLeft: component.padding,
            paddingRight: component.padding,
            '@media(max-width: 800px)': {
                width: '100%',
                paddingLeft: `${parseInt(component.padding, 10) * 0.75}px`,
                paddingRight: `${parseInt(component.padding, 10) * 0.75}px`,
            },
        });
    };

    return sheet;
};
