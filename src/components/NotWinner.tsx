import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {WinnersProps} from './Winners'
import {searchPostcode} from './common/utils/searchPostcode';
import ButtonComponent from './common/components/ButtonComponent';
import theme from '../assets/consts/theme';
import NoteList from '../assets/images/components/NoteList';

const {width, height} = Dimensions.get('screen')

//type NotWinnerType = Omit<WinnersProps, 'prize'>
interface NotWinnerType {
    postcode: string
    result: string
    navigation: any
}
const NotWinner:React.FC<NotWinnerType> = ({postcode, navigation}) => {
    const property = searchPostcode(postcode)
    const {navigate} = navigation
    const handleClickPlay = (screen:string) => {
        return navigate('SearchPostcode')
    }
    const handleClickWinners = (screen:string) => {
        return navigate('WinnerStories')
    }
    return (
        <View style={[styles.center, styles.headingPadding]}>
            {property && <Text style={[styles.headingText, styles.headingPosition]}>Sorry {property.name} {property.surname}, unfortulately you didn't win this time</Text>}
            
            <NoteList width={width/2} height={height/3} />
            <Text style={{...styles.headingText}}>Play in our upcoming Draw and Try Again</Text>
            <View style={{width:'70%', flexDirection:'column'}}>
                <ButtonComponent handlePress={handleClickPlay} buttonText="search again" buttonColor={theme.colors.tertiary}  textColor={theme.colors.white} />
                <ButtonComponent handlePress={handleClickWinners} buttonText='winner stories' buttonColor={theme.colors.primary} textColor={theme.colors.white} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    
    winnerStyle: {
        alignItems: "center",
        justifyContent:"center",
        
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    headingText: {
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center"
    },
    headingPosition: {
        top: 30,
        width: width/1.5
    },
    headingPadding: {
        paddingTop: 50
    }
})
export default NotWinner