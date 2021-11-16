import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Http = new XMLHttpRequest();
const Http_GET = new XMLHttpRequest();

const emulator_url = 'http://10.0.2.2:8080/api/users'
Http.open("POST", emulator_url);

Http.setRequestHeader("Accept", "/*/");
Http.setRequestHeader("Content-Type", "application/json");

var user_data = `{
    "id":1,
    "firstName":"Bryan",
    "lastName":"Oberholtzer",
    "phoneNumber":"1111111111",
    "email":"b@g.c",
    "birthday":"2021-01-01",
    "lastSeenLocation":{},
    "searchRadius":1,
    "biography":"He's a guy",
    "yearsOfExperience":1,
    "typeSportClimbing":false,
    "typeTradClimbing":false,
    "typeTopRope":false,
    "typeFreeSolo":false,
    "typeBouldering":true
    }`;
let response = "";

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    response = Http.responseText
}
Http.send();

Http_GET.open("GET", emulator_url);

let response_GET = "";

Http_GET.onreadystatechange = (e) => {
    console.log(Http_GET.responseText)
    response_GET = Http_GET.responseText
}
Http_GET.send();


export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.instructions}>
            {response}
            {'\n'}
            {response_GET}
        </Text>

      <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});
