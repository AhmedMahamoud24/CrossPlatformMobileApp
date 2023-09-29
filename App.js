import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
      <View style={styles.card} />
     </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop : 50, 
  },
  card: {
    width: 100,
    height: 150,
    backgroundColor: 'green',
    margin: 10,
  },
});

export default App;