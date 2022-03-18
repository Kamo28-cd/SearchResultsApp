import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import WinnersImage from '../assets/images/components/WinnersImage';
import theme from '../assets/consts/theme';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';
import {searchPostcode} from './common/utils/searchPostcode';
import RedBalloons from '../assets/images/components/RedBalloons'
import ButtonComponent from './common/components/ButtonComponent';

const {width, height} = Dimensions.get('screen')
const _size = 50

export interface WinnersProps {
    result: string
    postcode: string
    prize: string
    navigation: any
}

const Winners:React.FC<WinnersProps> = ({result, postcode, prize, navigation}) => {
    const property = searchPostcode(postcode)
    const {navigate} = navigation

    const handleClickNext = () => {
       navigate('WinnerStories')
        //navigate('SearchPostcode')
    }
    return (
    <View style={{...styles.winnerStyle}}>
        {property && (
            <View style={{...styles.winnersTextContainer}}>
                <Text style={[styles.prizeText, styles.textColorDark]}>Congratulations </Text>
                <Text style={{...styles.winnersText}}>{property.name} {property.surname}</Text>
            </View>
            
        )}
        <View style={{...styles.imageStyle}}>
                <WinnersImage width={width/2} height={height/3}  />
                <View style={[styles.center, StyleSheet.absoluteFillObject, styles.dotPosition]}>
                    <View style={[styles.dot, styles.center, styles.halfOpacity]}>
                        {[...Array(3).keys()].map((index:any) => {
                            return (
                                    <MotiView
                                        from={{opacity: 0.7, scale: 1}}
                                        animate={{opacity: 0, scale: 7}}
                                        transition={{
                                            type: 'timing',
                                            duration: 2000,
                                            easing: Easing.out(Easing.ease),
                                            delay: index * 400,
                                            repeatReverse: false,
                                            loop: true
                                        }}
                                        key={index}
                                        style={[StyleSheet.absoluteFillObject, styles.dot]} 
                                    />   
                            )
                        })}
                            
                    </View>
                </View>
        </View>
        
        <Text style={{...styles.winnersStyleText}}>Your Postcode {postcode} has won </Text>
        <Text style={{...styles.prizeText}}>{prize}</Text>
        <View style={{width:'70%', flexDirection:'row'}}>
            <ButtonComponent handlePress={handleClickNext} buttonText='winner stories' buttonColor={theme.colors.primary} textColor={theme.colors.white} />
        </View>
        <MotiView
            from={{top: height}}
            animate={{top: height/10}}
            transition={{
                type: 'timing',
                duration: 1000,
                easing: Easing.out(Easing.ease),
                delay: 200,
                repeatReverse: false,
                loop: false
            }}
        >
            <RedBalloons width={width} height={height/2}/>
        </MotiView>
        
    </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        marginTop:height/10,
        alignSelf: "center",
        position: "relative"
    },
    winnerStyle: {
        alignItems: "center",
        justifyContent:"center",
        
    },
    winnersStyleText: {
        fontSize: 20,
        fontWeight: "700"
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    dot: {
        width: _size,
        height: _size,
        borderRadius: _size,
        backgroundColor: theme.colors.primary,
        
    },
    halfOpacity: {
        opacity: 0.5
    },
    dotPosition: {
        marginTop: 80
    },
    prizeText: {
        fontSize: 28,
        fontWeight: "700",
        color: theme.colors.tertiary,
        paddingVertical: 20
    },
    winnersText: {
        fontSize: 28,
        fontWeight: "700",
        color: theme.colors.tertiary,
 
    },
    winnersTextContainer: {
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 0
    },
    textColorDark: {
        color: theme.colors.dark
    },
    viewStyle: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    

})
export default Winners