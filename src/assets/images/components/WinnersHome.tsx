import React from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'

export interface ImageProps {
    width: number
    height: number 
}

const {width, height} = Dimensions.get('screen')
const WinnersHome:React.FC<ImageProps> = ({width, height}) => {
  const styles = StyleSheet.create({
    backgroundImage: {
        height: height,
        width: width,
		    resizeMode: "cover",
        top:30
    }
})
  return (
    <ImageBackground 
        source={require('../stories/home.jpg' )}
        style={{...styles.backgroundImage}}

    />
  )
}

export default WinnersHome