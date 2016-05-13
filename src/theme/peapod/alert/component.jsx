/*! Peapod v<%= package.version %>
 *  Copyright Audentio <%= package.year %>
 *  LICENSE: <%= package.licence %>
 */

import React from 'react';
import Pod_Styler from 'styler.js';
import {Icon} from 'components.js';


/**
* Alerts component
*
* @element Pod_alert
* @param {boolean} [dismissable=true] - Allow user to dismiss alert
* @param {string} [ID] - Unique identifier for persistent state storage
*
*/
module.exports = class Alert extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			dismissed: this.isDismissed()
		}
	}

	//Validate props
	static propTypes = {
		dismissable: React.PropTypes.bool,
		id: React.PropTypes.string
	}

	static defaultProps = {
		dismissable: true,
		styler: {
			kind: 'general'
		}
	}


	//Check if user dismissed the alert already
	isDismissed() {

		var persistentState = localStorage[`Pod_alert_${this.props.id}_hidden`];

		if(this.props.dismissable && persistentState && persistentState === 'true') {
			return true
		}

		return false
	}


	//@fucntion dismiss()
	//onDismiss handler
	dismiss() {

		//set state
		this.setState({
			dismissed: true
		})

		if(this.props.dismissable) {

			if (this.props.id === undefined) {
				console.warn('Pod_Alert: ID not supplied for dismissable alert. State will not be persistent')
				return false;
			}

			//set persistent state (localStorage)
			localStorage[`Pod_alert_${this.props.id}_hidden`] = true
		}
	}


	render() {
		var style = Pod_Styler.getStyle(this);

		return (
			<div style={style.main} id={this.props.id}>
			{
				!this.state.dismissed &&

				<div style={style.wrapper}>

					<span style={style.message}>
						{this.props.children}
					</span>
					{this.props.dismissable &&
						<Icon onClick={this.dismiss} styler={{style:style.dismissIcon}} color="#07ADD4">close</Icon>
					}
				</div>
			}
			</div>
		)

	}


};