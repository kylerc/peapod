/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


// Dependencies
import React from 'react';
import Pod_Styler from 'utility/styler.js';


/**
* Template component
*
* @element Pod_modal
*
*/
module.exports = class FixedElement extends React.Component {

    constructor() {
        super();
        this.onScroll = this.onScroll.bind(this);
    }

    static propTypes = {
        onScroll: React.PropTypes.bool,
        containerWidth: React.PropTypes.bool,
        alwaysFixed: React.PropTypes.bool,
        children: React.PropTypes.any,
    }

    static defaultProps = {
        onScroll: true,
        containerWidth: false,
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        const elementInit = this.fixedElem;
        const elemRectInit = elementInit.getBoundingClientRect();

        this.origionalPosition = elemRectInit.top + window.scrollY;
        const origionalHeight = elementInit.scrollHeight;
        const alwaysFixed = this.origionalPosition === 0 || this.props.alwaysFixed;

        this.state = {
            position: 'static',
            origionalHeight,
            width: '100%',
            alwaysFixed,
        };

        if (this.state.alwaysFixed) {
            this.onScroll();
        } else {
            document.addEventListener('scroll', this.onScroll);
        }

        window.addEventListener('resize', this.onScroll);
    }

    onScroll() {
        const element = this.fixedElem;
        const elemRect = element.getBoundingClientRect();

        this.origionalPosition = elemRect.top + window.scrollY;
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        const positionStyle = (top > this.origionalPosition || this.state.alwaysFixed) ? 'fixed' : 'static';

        let containerWidth = '100%';

        if (this.props.containerWidth) {
            containerWidth = element.offsetWidth;
        }

        this.setState({
            position: positionStyle,
            width: containerWidth,
        });
    }

    render() {
        const style = Pod_Styler.getStyle(this);
        style.main.position = this.state.position;

        if (this.props.containerWidth) {
            style.main.width = this.state.width;
        }

        const fixedStyle = {
            height: this.state.origionalHeight,
            // transform: 'translate3d(0, 0, 0)'
        };

        if (this.props.onScroll) {
            return (
                <div style={fixedStyle} ref={(ref) => { this.fixedElem = ref; }}>
                    <div style={style.main} >
                        {this.props.children}
                    </div>
                </div>
            );
        }
        return (
            <div style={style.main}>
                {this.props.children}
            </div>
        );
    }
};
