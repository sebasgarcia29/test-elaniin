/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParams } from '../../navigation/StackNavigator';
import { FadeInImage, PokemonDetails } from '../../components';
import { usePokemon, useAppNavigation } from '../../hooks';
import { styles } from './styles';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ route }: Props) => {
  const navigation = useAppNavigation();
  const { top } = useSafeAreaInsets();

  const { color, simplePokemon } = route.params;
  const { name, id, picture } = simplePokemon;

  const { isLoading, pokemon } = usePokemon(id);

  return (
    <View style={{ flex: 1 }}>
      {/* Header container */}
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            ...styles.backButton,
            top: top + 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon name={'arrow-circle-left'} size={35} color={'white'} />
        </TouchableOpacity>

        {/* Name Pokemon */}
        <Text style={{ ...styles.pokemonName, top: top + 45 }}>
          {name + '\n'} # {id}
        </Text>

        {/* Pokebola Blanca */}
        <Image
          source={require('../../assets/pokebola-blanca.png')}
          style={{ ...styles.pokeball }}
        />
        {/* Pokemon Image */}
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>

      {/* Detalles y Loading */}
      {isLoading ? (
        <View style={{ ...styles.activityIndicator }}>
          <ActivityIndicator color={color} size={60} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};
