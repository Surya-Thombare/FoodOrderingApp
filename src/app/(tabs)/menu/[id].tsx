import { Text, View } from '@/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react'

type Props = {}

const ProductDetaiolsScreen = (props: Props) => {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{ title: "Details: " + id}} />
      <Text>ProductDetaiolsScreen for id : {id}</Text>
    </View>
  )
}

export default ProductDetaiolsScreen;