module.exports = function (sheet) {
    const main = sheet.addMain();

    sheet.resolveValues = theme => { // eslint-disable-line no-unused-vars
        const component = {};
        return component;
    };

    sheet.resolveStyles = (component, theme) => { // eslint-disable-line no-unused-vars
        main.addSelector({
            common: {
                borderWidth: '1px',
                backgroundColor: theme.palette.white,
                padding: theme.font.size.xxxlarge,
                boxShadow: '0 1px 2px rgba(0,0,0,.2)',
                display: 'inline-block',
                textAlign: 'left',
                maxWidth: '400px',
            },
        });
    };

    return sheet;
};
