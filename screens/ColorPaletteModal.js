import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

const ColorPaletteModal = () => {
  const [name, setName] = useState('');
  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please enter a palette name');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette Name"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <FlatList></FlatList>
    </View>
  );
};

export default ColorPaletteModal;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 50,
    borderRadius: 5,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 10,
  },
});
