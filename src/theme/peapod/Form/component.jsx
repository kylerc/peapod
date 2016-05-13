/*! Peapod v<%= package.version %>
 *  Copyright Audentio <%= package.year %>
 *  LICENSE: <%= package.licence %>
 */

/* Dependencies */
import React from 'react'
import Pod_Styler from 'styler'
import Pod_helper from 'helper'
import {Progress} from 'components'

/**
*
* Handle post/get requests with callback
*
*/
module.exports = class Form extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			fields: this.props.children,
			disabled: false
		}
	}

	static propTypes = {
		action: React.PropTypes.string.isRequired,
		autoPopulate: React.PropTypes.bool,
		fetch: React.PropTypes.string,
		renderSubmit: React.PropTypes.bool
	}

	static defaultProps = {
		method: 'GET',
		renderSubmit: false
	}

	submit(ev){
		let _this = this;

		var form = this.refs.form,
			formData = {};

		for ( var i = 0; i < form.elements.length; i++ ) {
			var e = form.elements[i];
			if(e.type !== 'submit')
				formData[e.name] = e.value;
		}

		var xhr_data = encodeURIComponent(JSON.stringify(formData));

		//_this.loading_start();

		var xhr_config = {
			cache: false,
			url: this.props.action,
			method: this.props.method,
			data: 'json_data='+xhr_data,
			success: function(res){
				//console.log(JSON.parse(res))
			},
			error: function(status){
				console.log('whoops' + status)
			},
			complete: function(res, status){
				//_this.loading_stop();
			}
		}

		var callback = _this.props.callback;

		if(typeof callback == "object") {
			if(callback.progress) {
				xhr_config.progress = (progress, e) => callback.progress(progress, e)
			}
			if(callback.success) {
				xhr_config.success = (response, status) => callback.success(response, status)
			}
			if(callback.error) {
				xhr_config.error = (response, status) => callback.error(response, status)
			}
			if(callback.complete) {
				xhr_config.complete = (response, status) => callback.complete(response, status)
			}
		}
		else if(typeof callback == "function") {
			xhr_config.complete = (response, status) => callback(response, status)
		}

		Pod_helper.xhr(xhr_config)

		ev.preventDefault();

	}

	//Make form inaccessible
	loading_start(){
		this.setState({
			disabled: true
		})
	}

	//revert
	loading_stop(){
		this.setState({
			disabled: false
		})
	}

	populate(source, reRender = true) {
		let _this = this;
		let form = this.refs.form;

		_this.loading_start()

		Pod_helper.xhr({
			cache: false,
			url: source,
			method: 'GET',
			complete: function(res,status){
				_this.loading_stop()
			},
			progress: function(progress, e){
				_this.setState({
					downloadProgress: progress
				})
			},
			success: function(res){
				_this.setState({
					downloadProgress: null
				})
				var data;

				try{
					data = JSON.parse(res);
				} catch(e) {
					//no bueno
					console.error('[Form] Unable to parse response. Please check endpoint ' + source)
					return false
				}

				//Update child input values
				_this.setState({
					fields: React.Children.map(_this.props.children, child => {
						if(child.props && child.props.name && data.hasOwnProperty(child.props.name)) {
							return React.cloneElement(child, {
								value: data[child.props.name]
							})
						}
						return child
					})
				})
			},
			error: function(){
				console.error('Failed to fetch data. Please try reloading')
			}
		})
	}

	componentDidMount() {
		if(this.props.fetch) {
			this.populate(this.props.fetch)
		}
	}

	render() {

		var style = Pod_Styler.getStyle(this),
			hasDownloadProgress = this.state.downloadProgress !== null && !isNaN(this.state.downloadProgress);

		return (
			<form style={style.form} ref="form" method={this.props.method} action={this.props.action} onSubmit={this.submit.bind(this)}>
				<div style={style.main}>
				    {this.state.fields}
					{this.props.renderSubmit && <input type="submit" style={style.submit} />}
				</div>
				<div style={style.overlay}>
					{hasDownloadProgress && <Progress value={this.state.downloadProgress} />}
				</div>
			</form>
		)

	}

}