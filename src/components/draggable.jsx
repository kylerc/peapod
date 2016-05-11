/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/

//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import Pod_Styler from '../styler.js';
import Wrapper from '../wrapper.jsx';

/**
* Droppable component
* @element Code
*/
class Draggable extends React.Component {

    defaultProps = {
    	multiple: true
    }

    componentWillMount() {
        this.onDragStart = this.onDragStart.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
        this.onDragLeave = this.onDragLeave.bind(this)
    	this.onDragEnd = this.onDragEnd.bind(this)
    }

    onDragStart(event){
        // event.preventDefault();
        console.log(event)
        if (typeof this.props.onDragStart == 'function')
            this.props.onDragStart(event)
    }
    onDragEnter(event){
        event.preventDefault();

        if (typeof this.props.onDragEnter == 'function')
            this.props.onDragEnter(event)
    }
    onDrop(event){
        event.preventDefault();

        if (typeof this.props.onDrop == 'function')
            this.props.onDrop(event.dataTransfer)
    }
    onDragOver(event){
        event.preventDefault();

        if (typeof this.props.onDragOver == 'function')
            this.props.onDragOver(event)
    }
    onDragLeave(event){
        event.preventDefault();

        if (typeof this.props.onDragLeave == 'function')
            this.props.onDragLeave(event)
    }
    onDragEnd(event){
        event.preventDefault();

        if (typeof this.props.onDragEnd == 'function')
            this.props.onDragEnd(event)
    }

    render() {
        var style = Pod_Styler.getStyle(this);

        return (
            <div draggable
                onDragStart={this.onDragStart}
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDragEnd={this.onDragEnd}>
                {this.props.children}
            </div>
        );

    }

};

module.exports = Wrapper(Draggable);
