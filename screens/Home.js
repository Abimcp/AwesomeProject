import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';
const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing = true;
    await fetchColorPalettes();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text>Launch Modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
