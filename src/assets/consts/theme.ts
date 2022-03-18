import {createText, createBox, useTheme as useReTheme} from '@shopify/restyle';

import {ViewStyle, TextStyle, ImageStyle} from 'react-native';



const theme = {
  
	colors: {
    
		white: '#fff',
    
		text: 'rgba(12,13,52,0.7)',
    
		button: '#0C0D34',
    
		color: '#0C0D34',
    
		grey: 'rgba(12,13,52,0.05)',

    
		'slide.grey': '#F4F0EF',
    
		darkGrey: '#BABD98',
    
		danger: '#ff0055',
    
		primaryLight: 'rgba(12,13,52,0.05)',

		primaryLight2: '#E7F9F7', 
		   
		barter: '#F4A907',
    
		barter2: '#FFCB60',
    
		barter3: '#F8F6AF',
    
		barter4: '#94230C',
    
		black: '#000000',

		blue: '#24a2ef',
		//primary:'#122636',
		primary: '#21349E',
		secondary: '#A32D96',
		tertiary: '#E8437C',
		accent: '#FF7A5F',
		dark: '#000',
		light: '#f7f7f7',
		grey2: '#a9a9a9',
		grey3: '#989898',
		grey4: '#767676',
		grey5: '#656565',
		grey6: '#555555',
		yellow: '#ffb900',
		red: 'red',
		green: '#03c04a',
		coral: '#F26B5C',
		gold: '#daa520',
		gold2: '#deae36',
		gold3: '#e1b74d',
		gold4: '#e5c063',
		gold5: '#e9c979',
		gold6: '#edd290',
		gold7: '#f0dba6',
		gold8: '#f4e4bc',
		gold9: '#f8edd2',
		gold10: '#fbf6e9',
		bronze: '#cd7f32',
		bronze2: '#b9722c',
		bronze3: '#a46628',
		bronze4: '#905923',
		bronze5: '#7b4c1e',
		bronze6: '#674019',
		bronze7: '#523314',
		bronze8: '#3e260f',
		bronze9: '#29190a',
		bronze10: '#140d05',  
	},

  
	spacing: {
    
		s: 8,
 
		sm:12,   
		m: 16,

		ml:20,    
		l: 24,
    
		xl: 40,
  
	},
  
	borderRadii: {
    
		s: 4,
    
		m: 10,
    
		l: 25,
    
		xl: 75,
  
	},
  
	textVariants: {
    
		hero: {
      
			fontSize: 80,
      
			fontFamily: 'Roboto-Bold',
      
			color: 'white',
      
			textAlign: 'center',
    
		},
    
		title1: {
      
			fontSize: 80,
      
			fontFamily: 'Roboto-Bold',
      
			color: 'white',
    
		},
    
		title2: {
      
			fontSize: 24,
      
			lineHeight: 30,
      
			fontFamily: 'Roboto-Regular',
      
			color: 'color',
    
		},
    
		body: {
      
			fontSize: 16,
      
			lineHeight: 25,
      
			fontFamily: 'Roboto-Regular',
      
			color: 'text',
    
		},
    
		button: {
      
			fontSize: 15,
      
			fontFamily: 'Roboto-Regular',
      
			color: 'text',
    
		},
  
	},

	header: {
		paddingVertical:50,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingHorizontal: 10,
	},
	headerBtn: {
		height: 50,
		width:50,
		backgroundColor: '#fff',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems:'center',
	},
	btnStyle: {
		width: '100%',
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor: '#122636',
		borderRadius: 25,
		marginTop:20,
		elevation:11
	},
	btnStyleLight: {
		width: '100%',
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor: 'rgba(12,13,52,0.05)',
		borderRadius: 25,
		marginTop:20,
		elevation:11
	},  
	breakpoints: {},

};


export const Text = createText();

export const Box = createBox();

const useTheme = () => useReTheme();


export const makeStyles = (styles:any) => () => {
  
	const currentTheme = useTheme();
  
	return styles(currentTheme);

};


export default theme;
