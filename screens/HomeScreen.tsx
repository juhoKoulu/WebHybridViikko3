import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Appbar } from "react-native-paper";
import screenStyle from './screenStyle'

type Props = NativeStackScreenProps<any>;

const HomeScreen = () => {
  return (
    <View style={screenStyle.container}>
      <Text style={screenStyle.text}>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;
