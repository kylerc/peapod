/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/

import React from 'react';
import Styler from 'utility/styler.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    static propTypes = {
        children: React.PropTypes.any,
        kind: React.PropTypes.string,
        weight: React.PropTypes.string,
        upper: React.PropTypes.bool,
    }

    static defaultProps = {
        kind: 'h1',
        weight: 'bold',
        upper: false,
    }

    render() {
        const classes = Styler.getClasses(this);

        const tagname = this.props.kind;
        const Tagname = this.props.kind;

        return (
            <div className={classes.main}>
                <Tagname className={classes[tagname]}>
                    {this.props.children}
                </Tagname>
            </div>
        );
    }
};