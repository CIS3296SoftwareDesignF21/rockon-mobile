import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

const Http = new XMLHttpRequest();
const Http_GET = new XMLHttpRequest();

const emulator_url = 'http://10.0.2.2:8080/api/users'
Http.open("POST", emulator_url);

Http.setRequestHeader("Accept", "/!*!/");
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ROCK ON!</Text>

            <Image style={styles.image} source={require("./assets/rock_climb_logo.png")} />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.new_user_button}>New User? Make an account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
    },

});
