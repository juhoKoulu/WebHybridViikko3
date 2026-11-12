import React from 'react';
import { View, Text } from 'react-native';
import screenStyle from './screenStyle'

const SecondScreen = () => {
  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.text}>Welcome to the Second Screen!</Text>
    </View>
  );
};

export default SecondScreen;
