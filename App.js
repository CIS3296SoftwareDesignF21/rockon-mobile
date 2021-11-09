/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Card from './src/components/Card';

const App = () => {

  return (
    <View style = {styles.pageContainer}>
      <Card />
    </View>
 
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});


export default App;
