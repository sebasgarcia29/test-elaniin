/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
import { PokemonCard } from '../../components';
import { styles } from './styles';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <View>
      <Image
        source={require('../../assets/pokebola2.png')}
        style={styles.pokebolaBG}
      />

      <View style={styles.container}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          //Infinite Scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color={'#919fb6'}
            />
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}
            >
              Pokedex
            </Text>
          )}
        />
      </View>
    </View>
  );
};
