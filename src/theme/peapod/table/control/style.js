import { Sheet } from 'utility/stylesheet.js';

module.exports = function (sheetName) {
    var sheet = new Sheet(sheetName),
    main = sheet.addMain();

    // Conditions

    // Variables
    sheet.setValues({});

    main.addSelector({
        common: {
            color: '$table.color.controls.color',
            background: '$table.color.controls.background',
        },
    });

    return sheet;
};
