import React from "react";
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import styles from "./Style";
import { Logo } from "../../components/Logo/Logo";
import { TextInputCode } from "../../components/TextInput/TextInput";
import { ButtonInput } from "../../components/Button/Button";


export default function Home() {
    return(
        <View style={styles.container}>
            <Logo/>
            <TextInputCode/>
            <ButtonInput/>
            <StatusBar style="dark" />
        </View>
    )
}