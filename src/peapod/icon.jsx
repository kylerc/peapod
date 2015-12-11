/*! Peapod v<%= package.version %>
 *  Copyright Audentio <%= package.year %>
 *  LICENSE: <%= package.licence %>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { Pea_animation } from './animation.jsx';

var styles = {
	base: {
		cursor: 'default'
	}
}

/**
* Icon component
*
* @element Pea_icon
* @param {string} animation - pre-defined animation
* @param {string} color - Icon color
* @param {string} label - Icon label (for tooltip and ARIA)
*/
var Pea_icon = React.createClass({

	propTypes: {
		children: 		React.PropTypes.string.isRequired,
		animation: 		React.PropTypes.string,
		label: 			React.PropTypes.string,
		color: 			React.PropTypes.string
	},


	getDefaultProps: function() {
		return {
			size: '1em',
			color: 'inherit'
		}
	},

	componentWillMount: function(){

		//load icon font
		var stylesheet = document.getElementById('Peapod_IconFont_stylesheet');

		if(!stylesheet){ //check if <link> already exists

			//Create
			stylesheet = document.createElement('link');
			stylesheet.id = "Peapod_IconFont_stylesheet";
			stylesheet.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
			stylesheet.rel = "stylesheet";

			//append
			document.head.appendChild(stylesheet);
		}

	},

	render: function() {
		return (
			<i className="material-icons" aria-label={this.props.label} title={this.props.label} style={[
				styles.base,
				{'fontSize': this.props.size},
				{'color': this.props.color},
				this.props.style
			]}>{this.props.children}</i>
		);
	}

});

module.exports = Pea_animation(Radium(Pea_icon));