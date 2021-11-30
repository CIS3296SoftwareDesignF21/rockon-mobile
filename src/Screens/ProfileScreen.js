import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.root}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Name..."
            />
    
            <TextInput
              style={styles.input}
              placeholder="bio..."
              multiline
              numberOfLines={3}
            />
    
            <Pressable onPress={() => console.warn("Profile Edited")} style={styles.button}>
              <Text>Save</Text>
            </Pressable>
    
            <Pressable onPress={() => console.warn('Profile Signed Out')} style={styles.button}>
              <Text>Sign out</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    root: {
      width: '100%',
      flex: 1,
      padding: 10,
    },
    container: {
      padding: 10,
    },
    button: {
      backgroundColor: '#0000FF',
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      margin: 10,
    },
    input: {
      margin: 10,
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
    },
  });

export default ProfileScreen;
