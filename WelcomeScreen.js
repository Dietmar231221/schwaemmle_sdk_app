// WelcomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    navigation.navigate('MainMenu');
  };

  return (
    <View style={styles.background}>
      <Video
        source={require('./assets/animated-water.mp4')} // <-- wichtig: richtige Datei!
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />
      <View style={styles.container}>
        <Text style={styles.title}>Hallo, ich bin dein Poolassistent</Text>
        <Text style={styles.description}>
          Trage deine E-Mail und deinen Namen ein. Danke!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Dein Name"
          placeholderTextColor="#333"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Deine E-Mail-Adresse"
          placeholderTextColor="#333"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Button title="Später" onPress={handleContinue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    marginBottom: 12,
    borderRadius: 10,
    color: '#000',
  },
});
