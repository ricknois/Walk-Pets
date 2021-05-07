import React from 'react'
import { View, Text } from 'react-native'

export default function index({ route }) {

  const { oi } = route.params;
  return (
    <View>
      <Text>
        { console.log(route.params) }
      </Text>
    </View>
  )
}
