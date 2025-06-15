import React from 'react';
import { View ,Text,Pressable } from 'react-native';

import { styles } from './ButtonStyle';

export function ButtonInput() {
  return (
    <View  style={styles.container}>
      <Pressable style={styles.pressable} onPress={()=>{console.log('press')}}>
        <Text style={styles.button}>GENERATE</Text>
      </Pressable>

        <Pressable style={styles.pressable} onPress={()=>{console.log('press')}}>
        <Text style={styles.button}>⚡COPY</Text>
      </Pressable>
    </View>
  );
}