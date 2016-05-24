import React from 'react';
import Pod_Styler from 'utility/styler.js';

import { Icon } from 'utility/components.js';

module.exports = function (componentName) {
    return class Pod_Component extends React.Component {

        static displayName = componentName;

        render() {
            const style = Pod_Styler.getStyle(this);

            const icon = (typeof(this.props.icon) !== 'undefined' && this.props.icon.length) ? <Icon styler={{style: style.icon}}>{this.props.icon}</Icon> : null;

            return (
                <div style={style.main}>
                    {icon} {this.props.children}
                </div>
            );
        }
    };
};
