/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import TestClass from 'test';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  obj = new TestClass();
  return (
    <View style={{flex: 1}}>
      <Button title="hi" />
      <Text>{obj.name}</Text>
      <Text>{obj.speed}</Text>
    </View>
  );
};

export default App;
