import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './TextInputStyle';

interface TextInputCodeProps{
  pass:string
}

export function TextInputCode(props:TextInputCodeProps) {
  return (
    <View style={styles.inputContainer}> 
        <TextInput style={styles.inputer} placeholder='Pass' value={props.pass}/>
    </View>
  );
}