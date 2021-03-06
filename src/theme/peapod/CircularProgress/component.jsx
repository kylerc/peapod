/*! Peapod v<%= package.version %>
*  Copyright Audentio <%= package.year %>
*  LICENSE: <%= package.licence %>
*/

import React, { PropTypes } from 'react';
import Styler from 'utility/styler.js';

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
        const classes = Styler.getClasses(this);
        const { children: innerContent, value } = this.props;

        return (
            <div className={classes.main}>

                <div className={classes.track}></div>

                <div className={classes.maskTransformed}>
                    <div className={classes.mask} style={this.getTransform(value)}></div>
                </div>
                <div className={classes.mask}>
                    <div classNam={classes.circle} style={this.getTransform(value)}></div>
                </div>

                <div className={classes.content}>
                    <div className={classes.contentInner}>
                        {innerContent}
                    </div>
                </div>

            </div>
        );
    }

    getTransform = (value) => ({ transform: `rotate(${value * 1.8}deg)` })

};
