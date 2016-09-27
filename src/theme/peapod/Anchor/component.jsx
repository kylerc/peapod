/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/

import { Link } from 'react-router';
import React from 'react';
import Styler from 'utility/styler.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }
    static propTypes = {
        children: React.PropTypes.any,
        to: React.PropTypes.string,
        internal: React.PropTypes.bool,
    }

    static defaultProps = {
        internal: false,
    }

    static contextTypes = {
        store: React.PropTypes.object,
    }

    componentDidMount() {
        this.store = this.context.store;
    }

    onClick() {
        if (/#/g.test(this.props.to)) {
            const elem = document.querySelector(this.props.to.replace(/.+#/, '#'));
            const elemRectInit = elem.getBoundingClientRect();

            const origionalPosition = elemRectInit.top + window.scrollY;
            const store = this.store.getState().fixed;
            let extra = 0;

            for (let i = 0; i < store.length; i++) {
                if (origionalPosition > store[i].top + store[i].height) {
                    extra += store[i].height;
                }
            }

            window.scrollTo(0, origionalPosition - extra);
        }
    }

    render() {
        const classes = Styler.getClasses(this);

        const regex = /^(https?:\/\/|ftp:\/\/)/g;
        let anchor;
        if (regex.test(this.props.to) && !this.props.internal) {
            anchor = (
                <a
                    className={classes.main}
                    href={this.props.to}
                    ref={(ref) => { this.anchor = ref; }}
                    onClick={(e) => { this.onClick(); e.preventDefault(); return false; }}
                >
                    {this.props.children}
                </a>
            );
        } else {
            anchor = (
                <Link
                    className={classes.main}
                    to={`${this.props.to}`}
                    ref={(ref) => { this.anchor = ref; }}
                >
                    {this.props.children}
                </Link>
            );
        }

        return anchor;
    }

};