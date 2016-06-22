module.exports = function (sheet) {
    const main = sheet.addMain();
    const wrapper = sheet.addPart('wrapper');
    const title = sheet.addPart('title');
    const dismissIcon = sheet.addPart('dismissIcon');

    sheet.addCondition('multiline').addProp({ multiline: true });
    sheet.addCondition('full').addProp({ full: true });

    sheet.addCondition('kindGeneral').addStyler({ kind: 'general' });
    sheet.addCondition('kindInfo').addStyler({ kind: 'info' });
    sheet.addCondition('kindSuccess').addStyler({ kind: 'success' });
    sheet.addCondition('kindWarning').addStyler({ kind: 'warning' });
    sheet.addCondition('kindDanger').addStyler({ kind: 'danger' });

    sheet.resolveValues = theme => { // eslint-disable-line no-unused-vars
        const component = {
            background: {
                general: theme.color.base.base,
                success: theme.color.success.base,
                warning: theme.color.warning.active,
                info: theme.color.info.base,
                danger: theme.color.danger.base,
            },
        };
        return component;
    };

    sheet.resolveStyles = (component, theme) => { // eslint-disable-line no-unused-vars
        main.addSelector({
            common: {
                bottom: theme.gutter.internal,
                right: theme.gutter.internal,
                position: 'fixed',
            },
        });

<<<<<<< HEAD
    wrapper.addSelector({
        common: {
            fontSize: '$font.size.xsmall',
            borderRadius: '$border.radius.small',
            width: '300px',
            height: '48px',
            lineHeight: '48px',
            padding: '0 24px',
            zIndex: '999',
            color: 'rgba(255,255,255,.8)',
            backgroundColor: '#323232',
        },
    })
    .addSelector({
        condition: 'multiline',
        common: {
            height: '80px',
            padding: '24px',
            lineHeight: '1',
        },
    })
    .addSelector({
        condition: ['multiline', 'full'],
        common: {
            height: '112px',
            lineHeight: '1',
        },
    })
    .addSelector({
        condition: 'kindGeneral',
        common: {
            backgroundColor: '$notification.background.general',
        },
    })
    .addSelector({
        condition: 'kindSuccess',
        common: {
            backgroundColor: '$notification.background.success',
        },
    })
    .addSelector({
        condition: 'kindInfo',
        common: {
            backgroundColor: '$notification.background.info',
        },
    })
    .addSelector({
        condition: 'kindWarning',
        common: {
            backgroundColor: '$notification.background.warning',
        },
    })
    .addSelector({
        condition: 'kindDanger',
        common: {
            backgroundColor: '$notification.background.danger',
        },
    });
=======
        wrapper.addSelector({
            common: {
                fontSize: theme.font.size.body1,
                borderRadius: theme.border.radius.small,
                width: '300px',
                height: '48px',
                lineHeight: '48px',
                padding: '0 24px',
                zIndex: '999',
                color: 'rgba(255,255,255,.8)',
                backgroundColor: '#323232',
            },
        })
        .addSelector({
            condition: 'multiline',
            common: {
                height: '80px',
                padding: '24px',
                lineHeight: '1',
            },
        })
        .addSelector({
            condition: ['multiline', 'full'],
            common: {
                height: '112px',
                lineHeight: '1',
            },
        })
        .addSelector({
            condition: 'kindGeneral',
            common: {
                backgroundColor: component.background.general,
            },
        })
        .addSelector({
            condition: 'kindSuccess',
            common: {
                backgroundColor: component.background.success,
            },
        })
        .addSelector({
            condition: 'kindInfo',
            common: {
                backgroundColor: component.background.info,
            },
        })
        .addSelector({
            condition: 'kindWarning',
            common: {
                backgroundColor: component.background.warning,
            },
        })
        .addSelector({
            condition: 'kindDanger',
            common: {
                backgroundColor: component.background.danger,
            },
        });
>>>>>>> Audentio/master

        title.addSelector({
            common: {
                display: 'block',
                // marginBottom: '4px',
                color: 'white',
            },
        });

        dismissIcon.addSelector({
            common: {
                float: 'right',
                fontWeight: 'bold',
                color: theme.palette.yellow500,
                cursor: 'pointer',
                textTransform: 'uppercase',
                marginLeft: '24px',

                ':hover': {
                },
            },
        }).addSelector({
            condition: ['full'],
            common: {
                marginTop: '24px',
            },
        });
    };

    return sheet;
};
