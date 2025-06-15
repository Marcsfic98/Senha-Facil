import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './TextInputStyle';

export function TextInputCode() {
  return (
    <View style={styles.inputContainer}> 
        <TextInput style={styles.inputer} placeholder='Pass'/>
    </View>
  );
}