import React, {useState, useEffect} from 'react'
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import {Input, Button} from 'native-base';
import { Icon } from 'react-native-elements';
import theme from '../assets/consts/theme'
import SearchFile from '../assets/images/components/SearchFile'
import winners from './common/data/winners'
import postcodes from './common/data/postcodes'

const {width, height} = Dimensions.get('screen')

const SearchPostcode = ({navigation}:any) => {
    const [postcode, setPostcode] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [input, setInput] = useState('')

    const {navigate} = navigation;

    useEffect(() => {
        isValidPostcode(postcode)
    }, [input, postcode])

    const isValidPostcode = (text:string) => {
        setPostcode(text)
        if (text.length >1) text.toLowerCase().startsWith('bt') ? setDisabled(true) : setDisabled(false)
        if (text.length === 0) setDisabled(true)
           
    }
    const handleClick = () => {
            setInput(postcode)
            const winnerArray = winners
            const postCodeArray = postcodes
            if (postcode !== " ") {
                const winnerResult = winnerArray.filter((winner) => {
                    return Object.values(winner).join(" ").toLowerCase().includes(postcode.toLowerCase())
                    
                })
                let type 
                const finalSearchResults = Object.assign({}, winnerResult)
        
                if (finalSearchResults[0] !== undefined ) {
                    finalSearchResults[0].postcode === postcode ? type = 'winner' : type = null
                    const resultProps = {result: ''+type+'', postcode: ''+finalSearchResults[0].postcode+'', prize: ''+finalSearchResults[0].prize+''}
                    return navigate('Results', {data: resultProps })
                } else {
                    const postCodeResult = postCodeArray.filter((postcodeVal)=> {
                        return Object.values(postcodeVal).join(" ").toLowerCase().includes(postcode.toLowerCase())
                    })
                    const finalPostCodeResults = Object.assign({}, postCodeResult)
                    if (finalPostCodeResults[0] !== undefined) {
                        finalPostCodeResults[0].postcode === postcode ? type = 'not-winner' : type = 'no-data'
                        return navigate('Results', {data: {result: type, postcode: postcode}})
                    }
                    return navigate('Results', {data: {result: 'error', postcode: postcode}})
                }
                 
                
            }
        
    }
    return (
        <SafeAreaView style={{...styles.viewStyle}}>
             <View style={{...styles.headingStylesContainer}}>
                <Text style={{...styles.headingStyles}}>Find out if you're a winner</Text>
            </View>
            <View>
                <SearchFile width={width/2} height={height/3}/>
            </View>
           
            <View>
                
                <View style={{...styles.inputStyles}}>
                    <Icon  type="material-community" name="ticket-confirmation" color={theme.colors.tertiary} />
                    <Input 
                        flex={0.9}
                        ml="2.5"
                        variant="unstyled"
                        placeholder='Search for a Postcode'
                        defaultValue={postcode}
                        onChangeText={(text) => isValidPostcode(text)}
                    />
                </View>
               
               <View>
                    <Button style={disabled === true ? {...styles.disabledButtonStyle} :{...styles.buttonStyle}} disabled={disabled} onPress={handleClick}>
                        <Text style={{...styles.textStyles}}>Check Lottery Results</Text>
                    </Button>
               </View>
						
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        paddingVertical: 10,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        width: '100%',
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor: theme.colors.tertiary,
		borderRadius: 25,
		marginTop:20,
		elevation:11,
       
    },
    disabledButtonStyle: {
        width: '100%',
		alignItems: 'center',
		justifyContent:'center',
        backgroundColor: theme.colors.grey5,
        borderRadius: 25,
		marginTop:20,
		elevation:11,
    },
    textStyles: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        textTransform: 'lowercase',
        color: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 16,
        width: '100%',
        display:'flex'
      
    },
    inputStyles: {
        backgroundColor: theme.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        elevation: 5,
        alignItems:"center",
        justifyContent: "center"
    },
    headingStyles: {
        color: theme.colors.primary,
        fontSize: 48,
        textAlign: 'left',
        textShadowOffset: { width: 10, height: 10 }, 
        textTransform: 'capitalize'
    },
    headingStylesContainer: {
        position: 'absolute',
        top: height/10,
        left: 10,
        width: width/2,
        alignSelf: 'flex-start'
        
    },
    

})

export default SearchPostcode