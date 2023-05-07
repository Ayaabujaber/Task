import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.content}>
    <View style={styles.imagecon}>
    <Image source={require('./assets/imgg/logo.png')} style={styles.image} />
  </View>
      <View style={styles.item}>
        <Text style={styles.text}>Make your self stronger than you excuses</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/imgg/1.jpg')} style={styles.image} />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Or login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  item: {
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
  },
  imagecon: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#ff9933',
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;

