import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';
import Animated, { interpolate, useDerivedValue, useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const ROTATION = 60; 

const App = () => {
  
  const {width: screenWidth} = useWindowDimensions();
  const hiddenTranslateX = 2 * screenWidth;
  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION], ) + 'deg');
  const cardStyle = useAnimatedStyle(() =>({
    transform: [
        {
            translateX: translateX.value,
        },
        {
            rotate: rotate.value,
        }
    ],

  }));

  const gestureHandler = useAnimatedGestureHandler({
      onStart:(event, context ) => {
          context.startX = translateX.value;
      },
      onActive: (event, context) => {
          translateX.value = context.startX + event.translationX;
      },
      onEnd:() => {
          console.log('Touch Ended');
      },
  });

  return (
    <View style = {styles.pageContainer}>
        <PanGestureHandler onGestureEvent = {gestureHandler}>
        <Animated.View style = {[styles.animatedCard, cardStyle]}>
        <Card user = {users[0]}/>
      </Animated.View>
      </PanGestureHandler>
      <Pressable 
        onPress={() => (translateX.value = withSpring(Math.random() ))}>
          <Text>CHANGE VALUE</Text>
        </Pressable>
    </View>
 
  );
};

const styles = StyleSheet.create({
  pageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default App;
