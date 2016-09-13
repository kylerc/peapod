/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/

import React from 'react';
import Styler from 'utility/styler.js';
import { Block, Heading, Photo } from 'utility/components.js';

module.exports = componentName => class Pod_Component extends React.Component {

    static displayName = componentName;
    static defaultProps = {
        title: '',
        figure: false,
        align: 'left',
        figureVertical: 'top',
        contentVertical: 'top',
        figureWidth: 'auto',
    }

    // Validate props
    static propTypes = {
        title: React.PropTypes.any,
        figure: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.bool,
            React.PropTypes.string,
        ]),
        align: React.PropTypes.string,
        figureVertical: React.PropTypes.string,
        contentVertical: React.PropTypes.string,
        figureWidth: React.PropTypes.string,
        children: React.PropTypes.any,
    }

    render() {
        const classes = Styler.getClasses(this);

        const image = (typeof this.props.figure === 'string') ? <Photo src={this.props.figure} /> : this.props.figure;
        const figure = (this.props.figure) ? (
            <Block align={this.props.align} className={classes.figure}>
                {image}
            </Block>
        ) : '';

        const figureLeft = (this.props.align === 'left') ? figure : '';
        const figureRight = (this.props.align === 'right') ? figure : '';

        const titleContents = (typeof this.props.title === 'string') ? (<Heading kind="h4">{this.props.title}</Heading>) : this.props.title;
        const title = (this.props.title) ? titleContents : '';

        return (
            <Block className={classes.main}>
                {figureLeft}
                <Block className={classes.content}>
                    {title}
                    {this.props.children}
                </Block>
                {figureRight}
            </Block>
        );
    }
};
