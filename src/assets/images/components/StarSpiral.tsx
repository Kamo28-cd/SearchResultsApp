import React from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'

export interface ImageProps {
    width: number | string
    height: number | string
}

const {width, height} = Dimensions.get('screen')
const StarSpiral:React.FC<ImageProps> = ({width, height}) => {
  return (
    <ImageBackground 
        source={require('./star-spiral.png' )}
        style={{...styles.backgroundImage}}

    />
  )
}
const styles = StyleSheet.create({

    backgroundImage: {
        height: height/2,
        width: width,
    }
})
export default StarSpiral