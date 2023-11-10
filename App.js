import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [count, setCount] = useState(10);
  const onPress = () => setCount(prevCount => prevCount + 1);
  
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('./src/img/chave.jpg')}
        />
        <Text>Count: {count}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Gerar Senha</Text>
        </TouchableOpacity>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#F2F2F2"
          maximumTrackTintColor="#000000"
        />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  
});
