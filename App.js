import React from 'react';
import { StyleSheet, View } from 'react-native';
import Audio from'./src/components/audio/audio'



export default function App() {
  return (
    <View style={styles.container}>
      <Audio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'yellowgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
