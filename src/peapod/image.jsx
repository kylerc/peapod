/*! Peapod v<%= package.version %>
 *  Copyright Audentio <%= package.year %>
 *  LICENSE: <%= package.licence %>
 */

import React from 'react';
//import ReactDOM from 'react-dom';
import Radium from 'radium';
import core from './core.jsx';
var Pea_Styler = require('./mixins/styler.jsx');
var Pea_Vars = require('./mixins/vars.jsx');

//Style definitions
var
imageContainerStyle = {
	base: {
		display: 'inline-block',
		position: 'relative'
	}
},

imageStyle = {
	base: {
		display: 'block'
	},
	hasLightbox: {
		cursor: 'pointer'
	}
},

captionStyle = {
	base: {
		display: 'block',
		padding: '6px 10px',
		position: 'absolute',
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		width: '100%'
	}
},

lightboxStyle = {
	base: {
		display: 'table',
		cursor: 'pointer',
		position: 'fixed',
		zIndex: 999,
		backgroundColor: 'rgba(0,0,0,0.75)',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		transition: '300ms',
		visibility: 'hidden',
		opacity: 0,
		display: 'none'
	},

	animated: {
		display: 'table',
	},

	visible: {
		display: 'table',
		visibility: 'visible',
		opacity: 1
	},

	inner: {
	  display: 'table-cell',
	  textAlign: 'center',
	  verticalAlign: 'middle',
	}
},

lightboxImageStyle = {
	base: {
		maxWidth: '90%',
		maxHeight: '90%',
		maxWidth: '90vw',
		maxHeight: '90vh',
		transition: '400ms ease',
		transform: 'scale(.7)',
	},

	visible: {
		transform: 'none'
	}
};

/**
* Image component: loads HiDPI images on retina devices
*
* @element Pea_image
* @param {string} src - Image URL ()
* @param {(bool|Object)} [hidpi-data] - object map of pixel densities and prefixes. False to disable hidpi asset loading
* @param {string} [alt] - alt attribute
* @param {string} [caption] - Image caption
* @param {bool} [lazy] - Should the resource load lazily?
* @param {Number} [lazy-distance] - Lazy images will be loaded when within this distance from viewport
* @param {bool} [lightbox] - Enable lightbox on instance
* @param {bool} [lightbox-animation] - Animated lightbox (ability to turn off for specific high-res images)
*/
var Pea_image = React.createClass({
	mixins: [Pea_Styler],

	propTypes: {
		src: React.PropTypes.string.isRequired,
		'hidpi-data': React.PropTypes.oneOfType([ React.PropTypes.array, React.PropTypes.bool ]),
		alt: React.PropTypes.string,
		caption: React.PropTypes.string,
		lazy: React.PropTypes.bool,
		'lazy-distance': React.PropTypes.number,
		lightbox: React.PropTypes.bool,
		'lightbox-animation': React.PropTypes.bool
	},


	getDefaultProps: function() {
		return {
			'hidpi-data': [['1.5', '@2x']],
			lazy: false,
			'lazy-distance': 500,
			lightbox: false,
			'lightbox-animation': true
		}
	},


	getInitialState: function() {
		return {
			visible: (this.props.lazy) ? false : true,
			lightboxVisible: false
		};
	},

	keyHandler: function(e){
		if(e.keyCode == peapod.helper.keymap['esc']){
			this.hideLightbox();
		}
	},

	//show lightbox
	showLightbox: function(){
		if(!this.props.lightbox){
			return false;
		}

		this.setState({lightboxVisible: true})

		//enable scrolling
		peapod.helper.scrolling(false)

		//add keyboard listener
		window.addEventListener('keydown', this.keyHandler)
	},

	//hide lightbox
	hideLightbox: function(){
		this.setState({lightboxVisible: false});

		//enable scrolling
		//document.documentElement.style.overflow = ''
		peapod.helper.scrolling(true)

		//remove keyboard listener
		window.removeEventListener('keydown', this.keyHandler)
	},

	//Check if element is within the defined viewport range
	// -- {lazyDistance}px above and below current viewport
	checkVisibility: function() {
		/*
		var bounds = ReactDOM.findDOMNode(this).getBoundingClientRect(),
			scrollTop = window.pageYOffset,
			top = bounds.top + scrollTop,
			height = bounds.bottom - bounds.top;

		if(top === 0 || (top <= (scrollTop + window.innerHeight + options.lazyDistance) && (top + height + options.lazyDistance) > scrollTop)){
			this.setState({visible: true});
			this.removeListener(); //stop listening, the show is over
		}
		*/

		//Kyler, look into how to not duplicate ReactDOM here
		this.setState({visible: true});

	},

	removeListener: function() {
		window.removeEventListener('scroll', this.checkVisibility);
		window.removeEventListener('resize', this.checkVisibility);
	},

	componentDidMount: function() {

		//initial check
		this.checkVisibility();

		//start listening for viewport events
		if(this.props.lazy) { window.addEventListener('scroll', this.checkVisibility) }

	},

	//re-check on update
	componentDidUpdate: function() {
		if(!this.state.visible) this.checkVisibility();
	},

	//stop listening if component is about to unmount
	componentWillUnmount: function() {
		this.removeListener();
	},


	componentWillMount: function(){

		var hiDpiData = this.props['hidpi-data'];
		if(hiDpiData) { //hiDPI resource is available

			//break down the url
			var
			url = this.props.src.split('.'),
			extension = url.splice(-1,1),
			filePath = url.join('.'),
			suffix = '';

			//loop through hidpi array. Overrides are sequential
			hiDpiData.forEach(function(item){

				//grab suffix from last apporpiate array
				suffix = ( window.devicePixelRatio >= Number(item[0]) ) ? item[1] : suffix;

			})

			//Suffixed URL
			this.imageURL = filePath + suffix + '.' + extension;

		}
		else { //hiDPI is disabled. Load normal resource
			this.imageURL = this.props.src;
		}

		//Caption
		this.caption = (this.props.caption) ? <span style={captionStyle.base}>{this.props.caption}</span> : undefined;

	},

	render: function() {

		return (
			<div style={[imageContainerStyle.base, this.props.style]}>

				<img onClick={this.showLightbox} src={this.state.visible ? this.imageURL : options.blankImage} alt={this.props.alt}
				style={[
					imageStyle.base,
					this.props.lightbox && imageStyle.hasLightbox
				]} />
				{this.caption}

				{this.props.lightbox &&
					<div style={[
						lightboxStyle.base,
							this.props['lightbox-animation'] && lightboxStyle.animated,
							this.state.lightboxVisible && lightboxStyle.visible
						]} onClick={this.hideLightbox}>

						<div style={lightboxStyle.inner}>

							<img style={[
								lightboxImageStyle.base,
								this.state.lightboxVisible && lightboxImageStyle.visible,
							]} src={this.state.visible ? this.imageURL : options.blankImage} />

						</div>

					</div>
				}
			</div>
		);
	}

});

export default Radium(Pea_image);