module.exports = {
	global: {
		//Palette - from https://www.google.com/design/spec/style/color.html#color-color-palette
		/*
		function camelize(str) {
		return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
		return index == 0 ? match.toLowerCase() : match.toUpperCase();
		});
		}
		var ret = '';
		var sections = document.querySelectorAll('.color-group');
		for (var i = 0; i < sections.length; i++) {
		var section = sections[i];
		var sectionName = section.querySelector('.name');
		if (sectionName !== null) {
		sectionName = sectionName.innerHTML.replace(' ', '')
		} else {
		sectionName = '';
		}
		var colors = section.querySelectorAll('.color');
		for (var j = 0; j < colors.length; j++) {
		var color = colors[j];
		var newLine = sectionName + color.querySelector('.shade').innerHTML
		console.log(newLine);
		if (color.className.indexOf('main') == -1) ret = ret + '\n' + camelize(newLine) + ": '" + color.querySelector('.hex').innerHTML + "',"
		}
		}
		console.log(ret);
		*/
		palette: {
			red50: '#ffebee',
			red100: '#ffcdd2',
			red200: '#ef9a9a',
			red300: '#e57373',
			red400: '#ef5350',
			red500: '#f44336',
			red600: '#e53935',
			red700: '#d32f2f',
			red800: '#c62828',
			red900: '#b71c1c',
			redA100: '#ff8a80',
			redA200: '#ff5252',
			redA400: '#ff1744',
			redA700: '#d50000',
			pink50: '#fce4ec',
			pink100: '#f8bbd0',
			pink200: '#f48fb1',
			pink300: '#f06292',
			pink400: '#ec407a',
			pink500: '#e91e63',
			pink600: '#d81b60',
			pink700: '#c2185b',
			pink800: '#ad1457',
			pink900: '#880e4f',
			pinkA100: '#ff80ab',
			pinkA200: '#ff4081',
			pinkA400: '#f50057',
			pinkA700: '#c51162',
			purple50: '#f3e5f5',
			purple100: '#e1bee7',
			purple200: '#ce93d8',
			purple300: '#ba68c8',
			purple400: '#ab47bc',
			purple500: '#9c27b0',
			purple600: '#8e24aa',
			purple700: '#7b1fa2',
			purple800: '#6a1b9a',
			purple900: '#4a148c',
			purpleA100: '#ea80fc',
			purpleA200: '#e040fb',
			purpleA400: '#d500f9',
			purpleA700: '#aa00ff',
			deepPurple50: '#ede7f6',
			deepPurple100: '#d1c4e9',
			deepPurple200: '#b39ddb',
			deepPurple300: '#9575cd',
			deepPurple400: '#7e57c2',
			deepPurple500: '#673ab7',
			deepPurple600: '#5e35b1',
			deepPurple700: '#512da8',
			deepPurple800: '#4527a0',
			deepPurple900: '#311b92',
			deepPurpleA100: '#b388ff',
			deepPurpleA200: '#7c4dff',
			deepPurpleA400: '#651fff',
			deepPurpleA700: '#6200ea',
			indigo50: '#e8eaf6',
			indigo100: '#c5cae9',
			indigo200: '#9fa8da',
			indigo300: '#7986cb',
			indigo400: '#5c6bc0',
			indigo500: '#3f51b5',
			indigo600: '#3949ab',
			indigo700: '#303f9f',
			indigo800: '#283593',
			indigo900: '#1a237e',
			indigoA100: '#8c9eff',
			indigoA200: '#536dfe',
			indigoA400: '#3d5afe',
			indigoA700: '#304ffe',
			blue50: '#e3f2fd',
			blue100: '#bbdefb',
			blue200: '#90caf9',
			blue300: '#64b5f6',
			blue400: '#42a5f5',
			blue500: '#2196f3',
			blue600: '#1e88e5',
			blue700: '#1976d2',
			blue800: '#1565c0',
			blue900: '#0d47a1',
			blueA100: '#82b1ff',
			blueA200: '#448aff',
			blueA400: '#2979ff',
			blueA700: '#2962ff',
			lightBlue50: '#e1f5fe',
			lightBlue100: '#b3e5fc',
			lightBlue200: '#81d4fa',
			lightBlue300: '#4fc3f7',
			lightBlue400: '#29b6f6',
			lightBlue500: '#03a9f4',
			lightBlue600: '#039be5',
			lightBlue700: '#0288d1',
			lightBlue800: '#0277bd',
			lightBlue900: '#01579b',
			lightBlueA100: '#80d8ff',
			lightBlueA200: '#40c4ff',
			lightBlueA400: '#00b0ff',
			lightBlueA700: '#0091ea',
			cyan50: '#e0f7fa',
			cyan100: '#b2ebf2',
			cyan200: '#80deea',
			cyan300: '#4dd0e1',
			cyan400: '#26c6da',
			cyan500: '#00bcd4',
			cyan600: '#00acc1',
			cyan700: '#0097a7',
			cyan800: '#00838f',
			cyan900: '#006064',
			cyanA100: '#84ffff',
			cyanA200: '#18ffff',
			cyanA400: '#00e5ff',
			cyanA700: '#00b8d4',
			teal50: '#e0f2f1',
			teal100: '#b2dfdb',
			teal200: '#80cbc4',
			teal300: '#4db6ac',
			teal400: '#26a69a',
			teal500: '#009688',
			teal600: '#00897b',
			teal700: '#00796b',
			teal800: '#00695c',
			teal900: '#004d40',
			tealA100: '#a7ffeb',
			tealA200: '#64ffda',
			tealA400: '#1de9b6',
			tealA700: '#00bfa5',
			green50: '#e8f5e9',
			green100: '#c8e6c9',
			green200: '#a5d6a7',
			green300: '#81c784',
			green400: '#66bb6a',
			green500: '#4caf50',
			green600: '#43a047',
			green700: '#388e3c',
			green800: '#2e7d32',
			green900: '#1b5e20',
			greenA100: '#b9f6ca',
			greenA200: '#69f0ae',
			greenA400: '#00e676',
			greenA700: '#00c853',
			lightGreen50: '#f1f8e9',
			lightGreen100: '#dcedc8',
			lightGreen200: '#c5e1a5',
			lightGreen300: '#aed581',
			lightGreen400: '#9ccc65',
			lightGreen500: '#8bc34a',
			lightGreen600: '#7cb342',
			lightGreen700: '#689f38',
			lightGreen800: '#558b2f',
			lightGreen900: '#33691e',
			lightGreenA100: '#ccff90',
			lightGreenA200: '#b2ff59',
			lightGreenA400: '#76ff03',
			lightGreenA700: '#64dd17',
			lime50: '#f9fbe7',
			lime100: '#f0f4c3',
			lime200: '#e6ee9c',
			lime300: '#dce775',
			lime400: '#d4e157',
			lime500: '#cddc39',
			lime600: '#c0ca33',
			lime700: '#afb42b',
			lime800: '#9e9d24',
			lime900: '#827717',
			limeA100: '#f4ff81',
			limeA200: '#eeff41',
			limeA400: '#c6ff00',
			limeA700: '#aeea00',
			yellow50: '#fffde7',
			yellow100: '#fff9c4',
			yellow200: '#fff59d',
			yellow300: '#fff176',
			yellow400: '#ffee58',
			yellow500: '#ffeb3b',
			yellow600: '#fdd835',
			yellow700: '#fbc02d',
			yellow800: '#f9a825',
			yellow900: '#f57f17',
			yellowA100: '#ffff8d',
			yellowA200: '#ffff00',
			yellowA400: '#ffea00',
			yellowA700: '#ffd600',
			amber50: '#fff8e1',
			amber100: '#ffecb3',
			amber200: '#ffe082',
			amber300: '#ffd54f',
			amber400: '#ffca28',
			amber500: '#ffc107',
			amber600: '#ffb300',
			amber700: '#ffa000',
			amber800: '#ff8f00',
			amber900: '#ff6f00',
			amberA100: '#ffe57f',
			amberA200: '#ffd740',
			amberA400: '#ffc400',
			amberA700: '#ffab00',
			orange50: '#fff3e0',
			orange100: '#ffe0b2',
			orange200: '#ffcc80',
			orange300: '#ffb74d',
			orange400: '#ffa726',
			orange500: '#ff9800',
			orange600: '#fb8c00',
			orange700: '#f57c00',
			orange800: '#ef6c00',
			orange900: '#e65100',
			orangeA100: '#ffd180',
			orangeA200: '#ffab40',
			orangeA400: '#ff9100',
			orangeA700: '#ff6d00',
			deepOrange50: '#fbe9e7',
			deepOrange100: '#ffccbc',
			deepOrange200: '#ffab91',
			deepOrange300: '#ff8a65',
			deepOrange400: '#ff7043',
			deepOrange500: '#ff5722',
			deepOrange600: '#f4511e',
			deepOrange700: '#e64a19',
			deepOrange800: '#d84315',
			deepOrange900: '#bf360c',
			deepOrangeA100: '#ff9e80',
			deepOrangeA200: '#ff6e40',
			deepOrangeA400: '#ff3d00',
			deepOrangeA700: '#dd2c00',
			brown50: '#efebe9',
			brown100: '#d7ccc8',
			brown200: '#bcaaa4',
			brown300: '#a1887f',
			brown400: '#8d6e63',
			brown500: '#795548',
			brown600: '#6d4c41',
			brown700: '#5d4037',
			brown800: '#4e342e',
			brown900: '#3e2723',
			grey50: '#fafafa',
			grey100: '#f5f5f5',
			grey200: '#eeeeee',
			grey300: '#e0e0e0',
			grey400: '#bdbdbd',
			grey500: '#9e9e9e',
			grey600: '#757575',
			grey700: '#616161',
			grey800: '#424242',
			grey900: '#212121',
			blueGrey50: '#eceff1',
			blueGrey100: '#cfd8dc',
			blueGrey200: '#b0bec5',
			blueGrey300: '#90a4ae',
			blueGrey400: '#78909c',
			blueGrey500: '#607d8b',
			blueGrey600: '#546e7a',
			blueGrey700: '#455a64',
			blueGrey800: '#37474f',
			blueGrey900: '#263238',
			black: '#000000',
			white: '#ffffff'
		},

		//Typography
		font: {
			family: {
				primary: 'Lato-Regular',
				secondary: 'Lato-Light',
				tertiary: 'Lato-Regular'
			},
			size: {
				xsmall: '1.1rem',
				small: '1.2rem',
				normal: '1.4rem',
				large: '1.6rem',
				xlarge: '1.8rem',
				xxlarge: '2.4rem',
				xxxlarge: '3.0rem'
			},
			weight: {
				light: '300',
				normal: '400',
				bold: '700'
			}
		},

		//Borders
		border: {
			color: 'transparent',
			width: '0',
			style: 'solid',
			radius: {
				small: '2px',
				large: '4px'
			}
		},

		//Colors
		color: {
			primary: {
				base: '#59C1AD',
				hover: '#7ACDBD',
				active: '#479A8A',
			},
			secondary: {
				base: '#00ACDB',
				hover: '#32bce2',
				active: '#0089af',
			},
			general: {
				base: '$palette.white',
				hover: '$palette.grey100',
				active: '$palette.grey200',
			},
			warning: {
				base: '$palette.yellow500',
				table: '$palette.yellow50',
				alert: '$palette.yellow100',
				hover: '$palette.yellow300',
				active: '$palette.yellow700',
			},
			info: {
				base: '$palette.blue500',
				table: '$palette.blue50',
				alert: '$palette.blue100',
				hover: '$palette.blue300',
				active: '$palette.blue700',
			},
			danger: {
				base: '$palette.red500',
				table: '$palette.red50',
				alert: '$palette.red100',
				hover: '$palette.red300',
				active: '$palette.red700',
			},
			success: {
				base: '$palette.lightGreen500',
				table: '$palette.lightGreen50',
				alert: '$palette.lightGreen100',
				hover: '$palette.lightGreen300',
				active: '$palette.lightGreen700',
			},
			base: {
				base: '#435160',
				table: '#F6F8FB',
				alert: '#D7D7D7',
				hover: '#647383',
				active: '#30373E',
			},
			text: {
				body: '#647383',
				light: '#424B54',
				base: '#30373E',
				dark: '#2b3137',
				white: '$palette.white'
			}
		},

		//Spacing
		gutter: {
			large: '3rem',
			small: '2rem',
			internal: '1rem'
		},

		//Transitions
		transition: {
			duration: '150ms'
		},

		//Buttons
		button: {
			color: {
				text: {
					light: '$color.text.white',
					dark: '$color.text.dark'
				},
				base: {
					background: '#778A9D',
					color: '#ABBAC9',
					hover: '$color.primary.hover',
					active: '$color.primary.active'
				}
			},
			border: {
				color: '$border.color',
				radius: '$border.radius.small',
				width: '$border.width',
				style: '$border.style'
			},
			height: '3.6rem',
			lineHeight: '$button.height',
			font: {
				family: 'inherit',
				size: '$font.size.normal'
			},
			transition: {
				duration: '150ms',
				scale: '0.92'
			}
		},

		//Checkbox
		checkbox: {
			width: '1.5rem',
			height: '$checkbox.width',
			color: {
				text: '$color.text.dark',
				background: '$palette.grey50',
				backgroundChecked: '$color.primary.base',
				icon: '$color.text.white'
			},
			border: {
				color: '$palette.grey200',
				colorChecked: '$checkbox.color.backgroundChecked',
				radius: '$border.radius.large',
				width: '1px',
				style: 'solid'
			},
			font: {
				family: 'inherit',
				size: '$font.size.normal'
			}
		},

		//Input
		input: {
			color: {
				text: '$palette.grey400',
				placeholder: '$palette.grey500',
				background: '$palette.grey50',
				backgroundFocus: '$palette.grey100',
				icon: '$input.color.text'
			},
			height: '4.5rem',
			lineHeight: '$input.height',
			padding: {
				left: '$gutter.internal',
				right: '$gutter.internal'
			},
			border: {
				color: '$palette.grey200',
				radius: '$border.radius.large',
				width: '1px',
				style: 'solid'
			},
			font: {
				family: 'inherit',
				size: '$font.size.normal'
			}
		},

		//Image
		image: {
			color: {
				captionBackground: 'rgba(255, 255, 255, 0.5)',
				lightboxBackground: 'rgba(0,0,0,0.75)'
			}
		},

		//Icon
		icon: {
			font: {
				size: 'inherit'
			},
			color: 'inherit'
		},

		//Grid
		grid: {
			breakpoints: {
				small: '610',
				medium: '800',
				large: '1024',
				xlarge: '1500'
			},
			xsmall: '@media (min-width: 1px)',
			small: '@media (min-width: 610px)',
			medium: '@media (min-width: 800px)',
			large: '@media (min-width: 1024px)',
			xlarge: '@media (min-width: 1500px)',
			smallLt: '@media (max-width: 609px)',
			mediumLt: '@media (max-width: 799px)',
			largeLt: '@media (max-width: 1023px)',
			xlargeLt: '@media (max-width: 1499px)'
		},

		//Panels
		panel: {
			color: {
				purple: {
					dark: '#686F9D',
					base: '#838CC7',
					light: '#979DCE'
				},
				teal: {
					dark: '#428E94',
					base: '#58B3B9',
					light: '#7ABEC4'
				},
				pink: {
					dark: '#934473',
					base: '#B95890',
					light: '#C376A1'
				},
				redDark: {
					dark: '#CC4A43',
					base: '#EE655E',
					light: '#F18375'
				},
				orangeDark: {
					dark: '#D6714B',
					base: '#EE855E',
					light: '#EF9976'
				}
			}
		},

		//Tables
		table: {
			color: {
				lightRow: {
					background: 'transparent',
					color: '$color.text.body',
					hover: '#EDF0F4'
				},
				darkRow: {
					background: '$color.base.table',
					color: '$color.text.body',
					hover: '#EDF0F4'
				},
				header: {
					background: '#525F6D',
					color: '$color.text.white',
					hover: '#525F6D'
				},
				checked: {
					background: '#E6E9ED',
					color: '$color.text.dark',
					hover: '$palette.blueGrey300'
				},
				columnHovered: {
					background: '#EDF0F4',
					color: '$color.text.body',
					headerBackground: '$color.base.active',
					headerColor: '$table.color.header.color'
				},
				controls: {
					background: '#647383',
					color: '#ABBAC9'
				},
				editIcon: {
					color: '#ABBAC7'
				}
			},
			border: {
				color: '$palette.grey200',
				radius: '$border.radius.large',
				width: '1px',
				style: 'solid'
			},
			gutter: {
				vertical: '$gutter.internal',
				horizontal: '$gutter.small'
			},
			font: {
				family: 'inherit',
				size: '$font.size.normal',
				headerFamily: '$font.family.secondary',
				headerSize: '$font.size.xsmall'
			},
			headerHeight: '5rem',
			footerHeight: '5rem'
		},


		//Paginator
		paginator: {
			border: {
				color: '#778A9D',
				width: '1px',
				style: 'solid'
			},
			font: {
				family: 'inherit',
				size: '$font.size.normal',
				triggerSize: '$font.size.xlarge'
			}
		},

		portal: {
			font: {
				family: '$font.family.primary'
			},
			dropdown: {
				width: '20rem'
			}
		},

		label: {
			color: {
				text: '$color.text.white'
			}
		}



	},
	dark: {
		checkbox: {
			color: {
				text: '$color.text.white',
				background: 'transparent'
			},
			border: {
				color: '$checkbox.color.text'
			}
		},
		input: {
			color: {
				text: '$color.text.white',
				placeholder: '$input.color.text',
				background: 'transparent',
				backgroundFocus: 'rgba(255, 255, 255, 0.1)',
				icon: '$input.color.text'
			},
			border: {
				color: '$palette.grey200',
			}
		}
	}
}
