import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState } from "react";
import SignIn from '../components/signin';

export default function App() {
    return(
        <SignIn/>
    );
}