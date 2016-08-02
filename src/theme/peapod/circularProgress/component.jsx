/*! Peapod v<%= package.version %>
*  Copyright Audentio <%= package.year %>
*  LICENSE: <%= package.licence %>
*/

import React, { PropTypes } from 'react';
import Pod_Styler from 'utility/styler.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    static propTypes = {
        value: PropTypes.number,
        max: PropTypes.number,
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.node,
            PropTypes.string,
        ]),
    }

    static defaultProps = {
        value: 25,
        max: 100,
        indeterminate: false,
    }

    render() {
        const style = Pod_Styler.getStyle(this);
        const { children: innerContent, value } = this.props;

        style.maskTransformed = Object.assign({}, style.mask, this.getTransform(value));
        style.circleTransformed = Object.assign({}, style.circle, this.getTransform(value));

        return (
            <div style={style.main}>

                <div style={style.track}></div>

                <div style={style.maskTransformed}><div style={style.circleTransformed}></div></div>
                <div style={style.mask}><div style={style.circleTransformed}></div></div>

                <div style={style.content}>
                    <div style={style.contentInner}>
                        {innerContent}
                    </div>
                </div>

            </div>
        );
    }

    getTransform = (value) => ({ transform: `rotate(${value * 1.8}deg)` })

};
