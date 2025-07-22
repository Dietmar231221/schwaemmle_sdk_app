import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function MainMenuScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hauptmenü</Text>

      <Button
        title="🧠 Zum Chat-Assistenten"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef', // oder dein Wasser-Hintergrund später
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
