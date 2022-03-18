import React from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'

export interface ImageProps {
    width: number
    height: number
    resizeMode: string
}

const {width, height} = Dimensions.get('screen')
const StarWaves:React.FC<ImageProps> = ({width, height, resizeMode}) => {
  const styles = StyleSheet.create({

    backgroundImage: {
        height: height/2,
        width: width,
        resizeMode: resizeMode
    }
})

  return (
    <ImageBackground 
        source={require('./star-waves.png' )}
        style={{...styles.backgroundImage}}

    />
  )
}

export default StarWaves