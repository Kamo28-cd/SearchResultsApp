import React from 'react'
import {Button} from 'native-base';
import {StyleSheet, Dimensions, Text, GestureResponderEvent} from 'react-native';
import theme from '../../../assets/consts/theme'

interface ButtonProps {
  buttonColor: string
  textColor: string
  disabled?: boolean
  buttonText: string 
  handlePress: Function
}
const ButtonComponent:React.FC<ButtonProps> = ({buttonColor, textColor, disabled, buttonText, handlePress}) => {
  const styles = StyleSheet.create({
    
    buttonStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: buttonColor,
        borderRadius: 25,
        marginTop:20,
        elevation:11,
      
    },
    textStyles: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      textTransform: 'lowercase',
      color: textColor,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      fontSize: 16,
      width: '100%',
      display:'flex',
      alignSelf: 'center'
    
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
  })
  return (
    <Button style={disabled === true ? {...styles.disabledButtonStyle} :{...styles.buttonStyle}} onPress={() => handlePress()} >
        <Text style={{...styles.textStyles}}>{buttonText}</Text>
    </Button>
  )
}

export default ButtonComponent