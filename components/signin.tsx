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
                <Text> Sign In Here!</Text>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Login" onPress={handleSignIn}/>
            </View>
        )
}

const styles = StyleSheet.create({
    main: { flex: 1, justifyContent: "center"},
})
