import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet} from 'react-native';


const Card = () => {
    return(
        <View style = {styles.card}>
            <ImageBackground
            source={require('/Users/carlosgonzalez/Documents/GitHub/rockon-mobile/assets/pexels-pixabay-461593.jpg')}
            style = {styles.image}>
            <View style={styles.cardInner}>
                <Text style ={styles.name}> Random name</Text>
                <Text style = {styles.bio}>
                    Random bio
                    </Text>
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
      width: '95%',
      height: '70%',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset:{
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    image:{
      width: '100%',
      height: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },
    cardInner:{
      padding: 10,
    },
    name : {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
    bio: {
      fontsize: 18,
      color: 'white',
      lineHeight: 25,
    },
  });

export default Card;