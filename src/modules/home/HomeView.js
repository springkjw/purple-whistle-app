import React from "react";
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

export default function HomeScreen({ isExtended, setIsExtended, navigation }) {
  return (
    <View>
      <Button title="로그인" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
