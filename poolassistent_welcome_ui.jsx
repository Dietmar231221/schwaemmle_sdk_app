import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('./assets/glass_water_drops.gif')} // Du kannst das anpassen
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Hallo, ich bin dein Poolassistent</Text>
        <Text style={styles.description}>
          Wenn du deine E-Mailadresse einträgst und mir deinen Namen mitteilst, wäre das super. Danke!
        </Text>
        <TextInput
          placeholder="Dein Name"
          placeholderTextColor="#ccc"
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Deine E-Mailadresse"
          placeholderTextColor="#ccc"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.buttonText}>Später</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function MainMenuScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Hauptmenü</Text>
      {/* Hier kommt das Menü */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#004f78',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#003f5c',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007cbf',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
