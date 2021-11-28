import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import users from '../../users';
import AnimatedStack from '../components/AnimatedStack';


const HomeScreen = () => {
  const onSwipeLeft = (user) => {
    console.warn("swipe left", user.name)
  };
  
  const onSwipeRight = (user) => {
    console.warn('swipe right', user.name)
  }; 

  return (
    <View style = {styles.pageContainer}>
       <AnimatedStack 
       data = {users}
       renderItem = {({item}) => <Card user={item} />}
       onSwipeLeft = {onSwipeLeft}
       onSwipeRight = {onSwipeRight}
       />
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


export default HomeScreen;
