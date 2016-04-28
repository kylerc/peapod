import {Sheet} from '../../stylesheet.jsx';

var sheet = new Sheet,
    main = sheet.addMain(),
    portal = sheet.addPart('portal'),
    trigger = sheet.addPart('trigger');

//Variables
sheet.setValues({
    common: {
    }
});

main.addSelector({
    common: {
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23)',
        padding: '16px 0',
        borderRadius: '$border.radius.small',
        zIndex: 3,
        position: 'absolute'
    }
});

portal.addSelector({
    common: {
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23)',
        padding: '16px 0',
        borderRadius: '$border.radius.small',
        zIndex: 3,
        position: 'relative'
    }
});

trigger.addSelector({
    common: {
        display: 'inline-block'
    }
})

module.exports = sheet;
