import {Sheet} from 'stylesheet.js';
import Radium from 'radium';

module.exports = function(sheetName) {
	var sheet = new Sheet(sheetName),
		main = sheet.addMain(),
		caption = sheet.addPart('caption'),
		image = sheet.addPart('image'),
		lightbox = sheet.addPart('lightbox'),
		lightboxInner = sheet.addPart('lightboxInner'),
		lightboxImage = sheet.addPart('lightboxImage'),
		lightboxActions = sheet.addPart('lightboxActions'),
		lightboxAction = sheet.addPart('lightboxAction');

	//Conditions
	sheet.addCondition('lightboxVisible').addState({lightboxVisible: true});
	sheet.addCondition('hasLightbox').addProp({lightbox: true});
	sheet.addCondition('lightboxAnimation').addProp({lightboxAnimation: true})
	sheet.addCondition('block').addStyler({block: true});
	sheet.addCondition('hovered').addStyler({hovered: true});

	//Variables
	sheet.setValues({
		color: {
			//captionBackground: 'rgba(255, 255, 255, 0.5)',
			captionBackground: '$palette.grey200',
			lightboxBackground: 'rgba(0,0,0,0.85)'
		}
	});

	//Animation keyframes
	var smackKeyframes = Radium.keyframes({
	  '0%': { transform: 'matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '3.2%': { transform: 'matrix3d(0.673, 0.192, 0, 0, 0.126, 0.673, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '4.5%': { transform: 'matrix3d(0.743, 0.25, 0, 0, 0.163, 0.743, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '6.41%': { transform: 'matrix3d(0.836, 0.301, 0, 0, 0.196, 0.836, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '9.01%': { transform: 'matrix3d(0.94, 0.308, 0, 0, 0.201, 0.94, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '12.71%': { transform: 'matrix3d(1.032, 0.234, 0, 0, 0.154, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '13.51%': { transform: 'matrix3d(1.044, 0.212, 0, 0, 0.14, 1.044, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '17.92%': { transform: 'matrix3d(1.07, 0.098, 0, 0, 0.066, 1.07, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '18.92%': { transform: 'matrix3d(1.069, 0.077, 0, 0, 0.052, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '25.23%': { transform: 'matrix3d(1.038, -0.001, 0, 0, -0.001, 1.038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '29.03%': { transform: 'matrix3d(1.016, -0.015, 0, 0, -0.01, 1.016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '31.43%': { transform: 'matrix3d(1.006, -0.017, 0, 0, -0.011, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '34.63%': { transform: 'matrix3d(0.997, -0.014, 0, 0, -0.01, 0.997, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '40.14%': { transform: 'matrix3d(0.992, -0.007, 0, 0, -0.005, 0.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '56.46%': { transform: 'matrix3d(1, 0.001, 0, 0, 0.001, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '62.36%': { transform: 'matrix3d(1.001, 0.001, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '81.48%': { transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '84.68%': { transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	  '100%': { transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' },
	}, 'smack');

	main.addSelector({
		common: {
			display: 'inline-block',
			// position: 'relative' // was causing an issue with positioned elements
		}
	})

	image.addSelector({
		common: {
			display: 'block',
			maxWidth: '100%'
		}
	}).addSelector({
		condition: 'hasLightbox',
		common: {
			cursor: 'pointer'
		}
	})

	caption.addSelector({
		common: {
			display: 'block',
			padding: '6px 10px',
			//position: 'absolute',
			fontSize: '$font.size.small',
			bottom: 0,
			left: 0,
			backgroundColor: '$photo.color.captionBackground',
			width: '100%'
		}
	}).addSelector({
		condition: 'hovered',
		common: {
			opacity: '1'
		}
	})

	lightbox.addSelector({
		common: {
			display: 'table',
			position: 'fixed',
			zIndex: 999,
			backgroundColor: '$photo.color.lightboxBackground',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			transition: '200ms',
			visibility: 'hidden',
			opacity: 0,
			display: 'none'
		}
	}).addSelector({
		condition: 'lightboxAnimation',
		common: {
			display: 'table'
		}
	}).addSelector({
		condition: 'lightboxVisible',
		common: {
			display: 'table',
			visibility: 'visible',
			opacity: 1
		}
	})

	lightboxInner.addSelector({
		common: {
			display: 'table-cell',
			textAlign: 'center',
			verticalAlign: 'middle'
		}
	})

	lightboxImage.addSelector({
		common: {
			maxWidth: '90%',
			maxHeight: '90%',
			maxWidth: '90vw',
			maxHeight: '90vh',
			transition: '.2s'
		}
	}).addSelector({
		condition: ['lightboxAnimation'],
		common: {
			transform: 'scale(.9)'
		}
	}).addSelector({
		condition: ['lightboxVisible','lightboxAnimation'],
		common: {
			transform: 'none'
		}
	})

	lightboxActions.addSelector({
		common: {
			position: 'absolute',
			top: '15px',
			right: '15px',
			fontSize: '24px',
			color: 'white',
		}
	})

	lightboxAction.addSelector({
		common: {
			display: 'inline-block',
			opacity: '.5',
			padding: '8px',
			marginLeft: '2px',

			':hover': {
				cursor: 'pointer',
				opacity: '1'
			}
		}
	})

	return sheet;
}
