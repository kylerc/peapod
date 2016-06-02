import { Sheet } from 'utility/stylesheet.js';
import Radium from 'radium';

const buttonKinds = ['base', 'general', 'primary', 'success', 'danger', 'warning', 'info'];

module.exports = function (sheetName) {
    const sheet = new Sheet(sheetName);
    const main = sheet.addMain();
    const ripple = sheet.addPart('ripple');
    const rippleContainer = sheet.addPart('rippleContainer');

    // Conditions
    sheet.addCondition('raised').addStyler({ raised: true });
    sheet.addCondition('block').addStyler({ block: true });
    sheet.addCondition('round').addStyler({ round: true });

    sheet.addCondition('disabled').addStyler({ disabled: true });
    sheet.addCondition('notDisabled').addStyler({ disabled: ['!=', true] });

    sheet.addCondition('dense').addStyler({ dense: true });
    sheet.addCondition('dialog').addStyler({ dialog: true });

    sheet.addCondition('icon').addStyler({ type: 'icon' });
    sheet.addCondition('text').addStyler({ type: 'text' });
    sheet.addCondition('bordered').addStyler({ type: 'bordered' });

    for (const index in buttonKinds) {
        if (buttonKinds[index]) {
            const conditionName = `kind${buttonKinds[index].charAt(0).toUpperCase() + buttonKinds[index].slice(1)}`;

            sheet.addCondition(conditionName).addStyler({ kind: buttonKinds[index] });
        }
    }

    const rippleSteps = {
        '100%': {
            borderRadius: '100%',
            opacity: 0,
            transform: 'scale(2.5)',
        },
    };

    const rippleAnimation = Radium.keyframes(rippleSteps, 'rippleAnimation');

    // Variables
    sheet.resolveValues = function (theme) {
        const component = {
            color: {
                text: {
                    light: theme.color.text.white,
                    dark: theme.color.text.dark,
                },
                base: {
                    background: theme.color.primary.base,
                    color: theme.color.text.white,
                    active: theme.color.primary.active,
                    get primary() { return component.color.base.background; },
                    get secondary() { return component.color.base.color; },
                    hover: {
                        primary: theme.color.base.hover,
                        get secondary() { return component.color.text.light; },
                    },
                },
                general: {
                    primary: theme.color.general.base,
                    secondary: 'white',
                    hover: {
                        primary: theme.color.general.hover,
                        get secondary() { return component.color.text.dark; },
                    },
                },
                primary: {
                    primary: theme.color.primary.base,
                    get secondary() { return component.color.text.light; },
                    hover: {
                        primary: theme.color.primary.hover,
                        get secondary() { return component.color.text.dark; },
                    },
                },
                warning: {
                    primary: theme.color.warning.base,
                    get secondary() { return component.color.text.dark; },
                    hover: {
                        primary: theme.color.warning.hover,
                        get secondary() { return component.color.text.dark; },
                    },
                },
                info: {
                    primary: theme.color.info.base,
                    get secondary() { return component.color.text.light; },
                    hover: {
                        primary: theme.color.info.hover,
                        get secondary() { return component.color.text.dark; },
                    },
                },
                danger: {
                    primary: theme.color.danger.base,
                    get secondary() { return component.color.text.light; },
                    hover: {
                        primary: theme.color.danger.hover,
                        get secondary() { return component.color.text.dark; },
                    },
                },
                success: {
                    primary: theme.color.success.base,
                    get secondary() { return component.color.text.light; },
                    hover: {
                        primary: theme.color.success.hover,
                        get secondary() { return component.color.text.dark; },
                    },
                },
            },
            border: {
                color: theme.border.color,
                radius: theme.border.radius.small,
                width: theme.border.width,
                style: theme.border.style,
            },
            height: '36px',
            denseHeight: '32px',
            get lineHeight() { return component.height; },
            get denseLineHeight() { return component.denseHeight; },
            font: {
                family: theme.font.family.primary,
                size: '14px',
                denseSize: '13px',
                weight: theme.font.weight.medium,
            },
            transition: {
                duration: '150ms',
                scale: '0.92',
            },
        };
        return component;
    };

    sheet.setValues({});

    sheet.resolveStyles = function (component, theme) {
        main.addSelector({
            common: {
                display: 'inline-block',
                borderRadius: component.border.radius,
                border: 'none',
                position: 'relative',
                overflow: 'hidden', // prevent ripple overflow
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontFamily: component.font.family,
                fontSize: component.font.size,
                fontWeight: component.font.weight,
                lineHeight: component.lineHeight,
                paddingTop: '0px',
                paddingBottom: '0px',
                paddingLeft: theme.gutter.internal,
                paddingRight: theme.gutter.internal,
                height: component.height,
                textAlign: 'center',
                outline: 'none',
                userSelect: 'none',
                verticalAlign: 'middle',
                minWidth: '88px',

                color: component.color.base.color,
                backgroundColor: component.color.base.background,
            },
        }).addSelector({
            condition: ['dense'],
            common: {
                height: component.denseHeight,
                lineHeight: component.denseLineHeight,
                fontSize: component.font.denseSize,
            },
        }).addSelector({
            condition: ['dialog'],
            common: {
                paddingLeft: theme.gutter.extrasmall,
                paddingRight: theme.gutter.extrasmall,
                marginLeft: theme.gutter.extrasmall,
                marginRight: theme.gutter.extrasmall,
                minWidth: '64px',
            },
        }).addSelector({
            condition: ['text'],
            common: {
                color: component.color.base.background,
                backgroundColor: 'transparent',
            },
        }).addSelector({
            condition: ['bordered'],
            common: {
                backgroundColor: 'transparent',
                color: component.color.base.background,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: component.color.base.background,
            },
        }).addSelector({
            condition: ['icon'],
            common: {
                paddingTop: '0px',
                paddingBottom: '0px',
                paddingLeft: '4px',
                paddingRight: '4px',
                minWidth: '0px',
                color: component.color.base.background,
                background: 'transparent',
                fontSize: theme.font.size.headline,
            },
        }).addSelector({
            condition: ['notDisabled'],
            common: {
                cursor: 'pointer',
            },
        }).addSelector({
            condition: 'disabled',
            common: {
                cursor: 'not-allowed',
                opacity: theme.opacity.notAllowed,
            },
        }).addSelector({
            condition: ['raised'],
            common: {
                boxShadow: theme.shadows.d1,
            },
        }).addSelector({
            condition: ['block'],
            common: {
                display: 'block',
            },
        }).addSelector({
            condition: ['round'],
            common: {
                borderRadius: '1000px',
            },
        });


        for (const index in buttonKinds) {
            if (buttonKinds[index]) {
                const conditionName = `kind${buttonKinds[index].charAt(0).toUpperCase() + buttonKinds[index].slice(1)}`;

                // button
                main.addSelector({
                    condition: [conditionName],
                    common: {
                        backgroundColor: component.color[buttonKinds[index]].primary,
                        color: component.color[buttonKinds[index]].secondary,
                    },
                }).addSelector({
                    condition: [conditionName, 'notDisabled'],
                    common: {
                        ':hover': {
                            backgroundColor: component.color[buttonKinds[index]].hover.primary,
                            color: component.color[buttonKinds[index]].hover.secondary,
                        },
                    },
                })
                // text
                .addSelector({
                    condition: ['text', conditionName],
                    common: {
                        backgroundColor: 'transparent',
                        color: component.color[buttonKinds[index]].primary,
                    },
                }).addSelector({
                    condition: ['text', conditionName, 'notDisabled'],
                    common: {
                        ':hover': {
                            backgroundColor: 'transparent',
                            color: component.color[buttonKinds[index]].hover.primary,
                        },
                    },
                })
                // bordered text
                .addSelector({
                    condition: ['bordered', conditionName],
                    common: {
                        backgroundColor: 'transparent',
                        color: component.color[buttonKinds[index]].primary,
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: component.color[buttonKinds[index]].primary,
                    },
                }).addSelector({
                    condition: ['bordered', conditionName, 'notDisabled'],
                    common: {
                        ':hover': {
                            backgroundColor: 'transparent',
                            color: component.color[buttonKinds[index]].hover.primary,
                            borderColor: component.color[buttonKinds[index]].hover.primary,
                        },
                    },
                });
            }
        }

        rippleContainer.addSelector({
            common: {
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                WebkitMaskImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)', // webkit bug with overflow & borderRadius
            },
        }).addSelector({
            condition: 'disabled',
            common: {
                display: 'none',
            },
        });

        ripple.addSelector({
            common: {
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '100%',
                transform: 'scale(0)',
                transformOrigin: 'center 50%',
                display: 'block',
                position: 'absolute',
                animation: 'x 850ms ease-out',
                animationName: rippleAnimation,
            },
        });
    };

    return sheet;
};
