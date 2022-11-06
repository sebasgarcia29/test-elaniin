import React from 'react';
import { Image, View, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../../hooks/usePokemonPaginated';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { PokemonCard } from '../../components/PokemonCard';
import { Text } from 'react-native';
import { themeStyles } from '../../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <View>
      <Image
        source={require('../../assets/pokebola2.png')}
        style={themeStyles.pokebolaBG}
      />

      <View style={{ alignItems: 'center' }}>
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
                ...themeStyles.title,
                ...themeStyles.globalMargin,
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
