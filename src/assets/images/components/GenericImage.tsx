import React, { useEffect, useState }  from 'react'
import { ImageBackground, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native'

export interface ImageProps {
    width: number
    height: number 
    image: any
}

const GenericImage:React.FC<ImageProps> = ({width, height, image}) => {
  

  
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
        source={image}
        style={{...styles.backgroundImage}}
      />
    

    
  )
}

export default GenericImage