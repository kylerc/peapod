import React from 'react';
import ReactDOM from 'react-dom';
var Pod_Styler = require('../styler.jsx');
var Wrapper = require('../wrapper.jsx')


import Pod_icon from './icon.jsx';

var Label = React.createClass({

	render: function() {

		var icon = (typeof(this.props.icon) !== 'undefined' && this.props.icon.length) ? <Pod_icon styler={{style: Pod_Styler.getStyle(this, 'icon')}}>{this.props.icon}</Pod_icon> : null

		return (
			<div style={Pod_Styler.getStyle(this)}>
				{icon} {this.props.children}
			</div>
		)
	}
});

module.exports = Wrapper(Label);