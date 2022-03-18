import theme from '../assets/consts/theme';
import React from 'react'
import {View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, FlatList, Pressable} from 'react-native';
import GenericImage from '../assets/images/components/GenericImage';
import winnerstories from './common/data/winnerstories';

const {width, height} = Dimensions.get('screen')
const WinnerStories = ({navigation}:any) => {
    const {navigate} = navigation;
    

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.white, flex:1, marginTop:30}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.title}>Winner Stories</Text>

    
            {winnerstories.map((stories)=> {
				<View>
					<Text style={style.title}>{stories.title}</Text>
					<GenericImage width={width/2} height={height/3} image={stories.image.uri} />
				</View>
            })}
      </ScrollView>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({

	iconContainer: {
		height: 25,
		width: 25,
		backgroundColor: theme.colors.white,
		position:'absolute',
		right:15,
		top: 15,
		borderRadius: 15,
		justifyContent:'center',
		alignItems: 'center',
		elevation:2
	},
	popularCard: {
		height: 90,
		width: width -100,
		backgroundColor: theme.colors.white,
		elevation: 10,
		marginVertical:20,
		flexDirection: 'row',
		borderRadius:10,
		marginRight: 10,
		marginLeft: 10,
	},
	rating: {
		fontWeight: 'bold',
		color: theme.colors.grey,
		fontSize: 12,
	}, 
	price: {
		fontWeight:'bold',
		color: theme.colors.grey2,
		fontSize: 12,
	},
	cardName: {
		marginTop:10,
		fontSize:12,
		color: theme.colors.dark,
		fontWeight: 'bold',
	},
	card: {
		height:240,
		backgroundColor: theme.colors.white,
		elevation:10,
		width:width/2.5,
		marginRight: 10,
		marginLeft:10,
		padding:10,
		marginVertical:20,
		borderRadius:10,
	},
	categoriesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20
	},
	categoryItemsBtn: {
		flexDirection: 'row',
		backgroundColor: theme.colors.light,
		padding:10,
		borderRadius:7,
		alignItems:'center',
		width:80,
		justifyContent:'center'
	},
	categoryText: {
		fontSize: 13,
		fontWeight: 'bold',
		color: theme.colors.dark, 
		alignItems:'center',
		justifyContent:'center'
	}, 
	header: {
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20
	}, 
	headerTitle: {
		fontSize:23,
		fontWeight: 'bold',
		width: '55%',
		lineHeight:30,
		paddingHorizontal: 20
	},
	searchInputContainer: {
		height:50,
		backgroundColor: theme.colors.light,
		flex:1,
		borderRadius:12,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal:20,
	},
	sortBtn: {
		backgroundColor: theme.colors.white,
		color: theme.colors.dark,
		height:50,
		width:50,
		borderRadius:12,
		justifyContent:"center",
		alignItems: "center",
		marginLeft:10
	},
	title: {
		fontSize:  18,
		fontWeight: 'bold',
		paddingHorizontal: 20,
	},
});
export default WinnerStories