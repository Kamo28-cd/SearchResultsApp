import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native';
import theme from '../assets/consts/theme';
import { Icon } from 'react-native-elements';
import Winners from './Winners'
import NotWinner from './NotWinner'

interface HeaderProps {
    headingText: string
}

const Results = ({navigation, route}:any) => {
    const {result, postcode, prize} = route.params.data
    const {navigate} = navigation;
    const headingText = "Search Results"
    
    const onNavigate = () => {
        navigate('SearchPostcode')
        
    }
    const Header:React.FC<HeaderProps> = ({headingText}):JSX.Element => {
        return <View>
            <View style={{ ...styles.header }}>
                <View>
                    <Icon name="chevron-left" type="material-community" size={28} color={theme.colors.grey4} onPress={onNavigate} />
                </View>
                <View>
                    <Text style={{ ...styles.headingText }}>{headingText}</Text>
                </View>
                <View>
                    <Icon name="dots-vertical" type="material-community" size={28} color={theme.colors.grey4} />
                </View>
            </View>
        </View>;
    }
    return (
        <SafeAreaView>
           <Header headingText={headingText} />
           {result === 'winner' && <Winners result={result} postcode={postcode} prize={prize} navigation={navigation} />}
           {result === 'not-winner' && <NotWinner result={result} postcode={postcode} navigation={navigation}/>}
        </SafeAreaView>
            
    )
}
const styles = StyleSheet.create({
    header: {
        display:'flex',
        flexDirection:'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems:'center',
        justifyContent: 'space-between',
        elevation:3,
        
    },
    headingText: {
        fontSize: 20,
        fontWeight: "400",

    }

})

export default Results