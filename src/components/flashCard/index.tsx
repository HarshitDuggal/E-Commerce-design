import { View, Text, Image } from 'react-native'
import React from 'react'
import { flashCardStyles } from './style'
import { ImageIcon } from '../../images/svg'

const FlashCard = () => {
  return (
    <View style={flashCardStyles.cardContainer}>
    <ImageIcon/>
    <View>
      <Text style={flashCardStyles.adsTitleText}>Get</Text>
      <Text style={flashCardStyles.percentText}>50% OFF</Text>
      <Text style={flashCardStyles.adsDetailText}>On first 03 order</Text>
    </View>
  </View>
  )
}

export default FlashCard;