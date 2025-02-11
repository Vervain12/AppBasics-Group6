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
            alert("Incorrect Format: Username must be at least 5 characters long.");
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
        <View style={styles.container}>
            <Text style={styles.title}> Sign In Here!</Text>
            <TextInput 
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={handleSignIn}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333'
    },
    input: {
        width: '100%',
        maxWidth: 300,
        height: 45,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#f8f8f8'
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 300,
        marginTop: 10,
        overflow: 'hidden',
        borderRadius: 8
    }
});