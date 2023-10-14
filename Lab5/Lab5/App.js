import React from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';



function App(props) {
  let input = '';

  const handleAddItem = () => {
    if (input.trim() !== '') {
      props.addItem(input);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter Item"
        onChangeText={text => input = text} 
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList
        data={props.items}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  items: state.item.items
});

const mapDispatchToProps = {
  addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

