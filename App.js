import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TextAncestorContext from "react-native-web/dist/exports/Text/TextAncestorContext";
import {TextInput} from "react-native-web";

const emulator_url = 'http://10.0.2.2:8080/api/users';
const localhost_url = 'https://127.0.0.1:8080/api/users';
const localhostipv6_url = 'http://[::1]:8080/api/users';

const Http = new XMLHttpRequest();
const Http_GET = new XMLHttpRequest();

/*
Http.open("GET", emulator_url);

Http.setRequestHeader("Accept", "");
Http.setRequestHeader("Content-Type", "application/json");

let response = "Default Text";

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

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    response = Http.responseText
}
Http.send();
 */

/*
Http_GET.open("GET", emulator_url);

let response_GET = "";

Http_GET.onreadystatechange = (e) => {
    console.log(Http_GET.responseText)
    response_GET = Http_GET.responseText
}
Http_GET.send();
 */

/*
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            myText: 'Default text'
        }
    }

    updateMyText(newString) {
        this.setState({myText: newString})
    }

    queryOnButtonPress() {
        let httpQuery = new XMLHttpRequest();

        //EMULATOR USE
        httpQuery.open("GET", emulator_url);
        //LOCALHOST USE
        //httpQuery.open("GET", localhost_url);
        //LOCALHOST IPV6 USE
        //httpQuery.open("GET", localhostipv6_url);

        let response = "";

        //console.log(response);

        httpQuery.onreadystatechange = (e) => {
            console.log(httpQuery.responseText)
            response = httpQuery.responseText

            console.log("==================\n\nSERVER RESPONSE:\n");
            console.log(response);
            console.log("\n==================\n\n");

            this.updateMyText(response);
        }
        httpQuery.send();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    {this.state.myText}
                    {'\n'}
                </Text>

                <TouchableOpacity
                    onPress={() => this.queryOnButtonPress()}
                    style={{backgroundColor: 'blue'}}>
                    <Text style={{fontSize: 20, color: '#fff'}}>Query API for All Users</Text>
                </TouchableOpacity>
                <StatusBar style="auto"/>
            </View>
        );
    }
}
 */

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <View style={styles.container}>
          <Text style={styles.title}>ROCK ON!</Text>
          <Image style={styles.image} source={require("./assets/rock_climb_logo.png")} />
          <StatusBar style="auto" />

      </View>
    );
}

function SecondScreen({ navigation }) {
    return (
        <View style={styles}>
            <Text>Secondary Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('LoginScreen')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SecondScreen" component={SecondScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#fa9f07",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    new_user_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#fb7804",
    },

    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 10,
    },
});

/*
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
*/
