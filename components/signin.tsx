import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import credentials from "../credentials.json";
import { validateUsername, validatePassword } from "./regexvvalidation";


export default function SignIn() {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const router = useRouter();
        

        const handleSignIn = () => {
            
            const validUsername = validateUsername(username);
            const validPassword = validatePassword(password);
            
            if (!validUsername) {
                alert("Incorrect Format: Username must be 5 characters long.");
                return;
            }
            
            if (!validPassword) {
                alert("Incorrect Format: Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character.");
                return;
            }

            // Comparing username, then username + password
            if (credentials.users.find((user) => user.username === username)){
                if (credentials.users.find((user) => user.username === username && user.password === password)){
                    router.push("/homepage");
                }
                else{
                    alert("Incorrect Password.")
                }
            }
            else{
                alert("Username not found.");
                return;
            }

        }

        return(
            <View>
                <Text style={styles.title_text}> Sign In Here!</Text>
                <TextInput style={styles.field_box}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput style={styles.field_box2}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.login_button}>
                    <Button title="Login" onPress={handleSignIn}/>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    main: { 
        flex: 1, 
        justifyContent: "center"
    },

    field_box: { 
        borderColor: "Black", 
        borderWidth: 2.5, 
        top: 240, 
        width: 200, 
        left: 75, 
        height: 25
    },

    field_box2: { 
        borderColor: "Black", 
        borderWidth: 2.5, 
        top: 245, 
        width: 200, 
        left: 75, 
        height: 25
    },

    login_button: { 
        top: 255, 
        left: 110,
        borderColor: "Blue",
        borderWidth: 2.5,
        width: 125,
        height: 45,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    title_text: {
        top: 210, 
        left: 100, 
        fontSize: 23,
        fontWeight: "bold"
    }
})
