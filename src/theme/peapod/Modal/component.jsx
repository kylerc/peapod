/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/

import React from 'react';
import Styler from 'utility/styler.js';
import { Overlay } from 'utility/components.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;

    static propTypes = {
        children: React.PropTypes.any,
        overlay: React.PropTypes.bool,
        closePortal: React.PropTypes.func,
    }

    static defaultProps = {
        overlay: true,
    }

    overlayClick = (e) => {
        const { closePortal } = this.props;
        if (!closePortal) return;

        const outsideClick = e.target !== this.refs.content && !this.refs.content.contains(e.target);
        if (outsideClick) {
            closePortal();
        }
    }

    render() {
        const classes = Styler.getClasses(this);

        const modalBox = (
            <div className={classes.main} ref="content">
                {this.props.children}
            </div>
        );

        return (this.props.overlay) ? (
            <Overlay onClick={this.overlayClick}>
                {modalBox}
            </Overlay>
        ) : modalBox;
    }
};
