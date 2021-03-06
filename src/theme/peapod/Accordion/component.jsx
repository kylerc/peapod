/*! Peapod v<%= package.version %>
*  Copyright Audentio <%= package.year %>
*  LICENSE: <%= package.licence %>
*/

import React from 'react';
import Styler from 'utility/styler.js';
import { Accordion_Section } from 'utility/components.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    static propTypes = {
        children: React.PropTypes.any,
        vertical: React.PropTypes.bool,
    }

    constructor() {
        super();

        this.state = {
            active: 0,
        };

        this.updateCurrent = this.updateCurrent.bind(this);
    }

    updateCurrent(active) {
        this.setState({ active });
    }

    render() {
        // const { styler, children, ...other } = this.props;
        const classes = Styler.getClasses(this);

        const thisChildren = (this.props.children.length) ? this.props.children : [this.props.children];

        let i = 0;
        const children = thisChildren.map((child) => {
            const html = (
                <Accordion_Section
                    {...child.props}
                    id={i}
                    key={i} // to stop errors
                    onTitleClick={this.updateCurrent}
                    active={i === this.state.active}
                    isLast={(i + 1) === thisChildren.length}
                    isFirst={(i) === 0}
                    vertical={this.props.vertical}
                />
            );
            i = i + 1;
            return html;
        });

        return (
            <div className={classes.main}>
                {children}
            </div>
        );
    }

};
