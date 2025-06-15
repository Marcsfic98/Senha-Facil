import React, { useState } from 'react';
import { View ,Text,Pressable } from 'react-native';

import { styles } from './ButtonStyle';
import { TextInputCode } from '../TextInput/TextInput';
import generatePass from '../../services/passwordService';

export function ButtonInput() {
  
    const [pass , setPass] = useState('');

    function handleGenerateButton() {
      let generateToken = generatePass()
      setPass(generateToken)
    }

  return (
    <View  style={styles.container}>
      <TextInputCode pass={pass}/>
      <Pressable style={styles.pressable} onPress={()=>{handleGenerateButton()}}>
        <Text style={styles.button}>GENERATE</Text>
      </Pressable>

        <Pressable style={styles.pressable} onPress={()=>{console.log('press')}}>
        <Text style={styles.button}>⚡COPY</Text>
      </Pressable>
    </View>
  );
}