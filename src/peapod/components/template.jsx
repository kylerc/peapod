/* Copyright <%= package.year %>, Audentio, LLC.
* All rights reserved.
*
* LICENSE: <%= package.licence %>
*/


//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

var Pod_Styler = require('../styler.jsx');

/**
* Template component
*
* @element Pod_template
*
*/
var Pod_template = React.createClass({

	//Validate props
	propTypes: {

	},

	getInitialState: function() {
		return {

		}
	},

	//Default props
	getDefaultProps: function() {
		return {

		}
	},

	render: function() {
		return (
			<div style={Pod_Styler.getStyle(this)}
				{this.props.children}>
			</div>
		);

	}

});

module.exports = Pod_template;
