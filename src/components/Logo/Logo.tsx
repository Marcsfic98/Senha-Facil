import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoStyle';

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gerador de Senhas</Text>
      <Image style={styles.image}  source={require('../../../assets/icon-cadeado.png')} />
    </View>
  );
}