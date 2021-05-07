import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, ActivityIndicator, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavProps } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';
import { allPokemonTypes } from '../pokedex/PokemonType';


const PokemonScreen: React.FC<NavProps<'PokemonScreen'>> = ({ navigation, route }) => {

  const [isLoading, setLoading] = useState(true);
  const [pokemonDetail, setPokemonDetail] = useState<Array<PokemonDetail> | null>(null);

  useEffect(() => {
    fetch('https://pokeapi.glitch.me/v1/pokemon/' + route.params.pokemon.id)
      .then((response) => response.json())
      .then((json) => setPokemonDetail(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name='angle-left' size={30} color='white' style={{ paddingHorizontal: 15 }} />
          </TouchableOpacity>
          <Text style={{
            color: 'white',
            fontSize: 22
          }}>Pokemon</Text>
        </View>

        <View style={{backgroundColor: 'aliceblue', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          {(isLoading || pokemonDetail === null || pokemonDetail.length == 0)
            ? <ActivityIndicator size='large' color='crimson' />
            : <PokemonBody pokemon={pokemonDetail[0]} />
          }
        </View>

      </View>
    </SafeAreaView>
  );
}

const PokemonBody: React.FC<{ pokemon: PokemonDetail }> = ({ pokemon }) => {

  const cardColor = pokemon.types.length != 0
    ? allPokemonTypes.find(element => {
      return element.name.toUpperCase() === pokemon.types[0].toUpperCase();
    })?.color
    : '#68a090';

  const allAbilities = pokemon.abilities.normal.concat(pokemon.abilities.hidden);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 14 }}>
      <View style={{ backgroundColor: cardColor, flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 10, borderRadius: 15 }}>
        <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
            <Image style={{ width: 100, height: 100, resizeMode: 'contain' }}
             source={{ uri: pokemon.sprite }} />
          </View>
          <View style={{ flex: 1, alignSelf: 'center', marginStart: 10, backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'grey', fontSize: 14, marginEnd: 5 }}>{'#' + pokemon.number}</Text>
              <Text style={styles.title}>{pokemon.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 3 }}>
              {
                pokemon.types.map((s, _index) => {
                  const matchedType = allPokemonTypes.find(element => {
                    return element.name.toUpperCase() === s.toUpperCase();
                  });

                  return <View key={s} style={{ backgroundColor: matchedType?.color ?? '#68a090', alignSelf: 'baseline', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 99, marginHorizontal: 2 }}>
                    <Text style={{ color: 'white', flexWrap: 'wrap' }}>{s}</Text>
                  </View>
                })
              }
            </View>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginVertical: 8 }} />
            <Text style={{ color: 'black', fontSize: 14 }}>{pokemon.species + ' Pokémon'}</Text>
          </View>
        </View>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Abilities</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', marginTop: 3, backgroundColor: 'white', borderRadius: 10, margin: 10, paddingVertical: 15 }}>
          {
            allAbilities.map((abs, _index) => {
              const isHidden = pokemon.abilities.hidden.includes(abs);
              return <Text style={{ flex: 1, color: 'black', textAlign: 'center' }}>{abs + (isHidden ? ' (Hidden)' : '')}</Text>
            })
          }
        </View>
        <Text style={{ color: 'black', fontSize: 18, marginTop: 5, fontWeight: 'bold' }}>Gender</Text>
        {
          pokemon.gender.length == 2
            ? <View style={{ flexDirection: 'column', alignItems: 'center', alignSelf: 'stretch', marginTop: 3, backgroundColor: 'white', borderRadius: 10, margin: 10, padding: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch' }}>
                <View style={{ backgroundColor: 'skyblue', height: 10, width: pokemon.gender[0].toString() + '%', marginVertical: 8, borderBottomEndRadius: pokemon.gender[1] == 0 ? 6 : 0, borderTopEndRadius: pokemon.gender[1] == 0 ? 6 : 0, borderTopStartRadius: 6, borderBottomStartRadius: 6 }} />
                <View style={{ backgroundColor: 'crimson', height: 10, width: pokemon.gender[1].toString() + '%', marginVertical: 8, borderTopEndRadius: 6, borderBottomEndRadius: 6, borderTopStartRadius: pokemon.gender[0] == 0 ? 6 : 0, borderBottomStartRadius: pokemon.gender[0] == 0 ? 6 : 0 }} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={{ flex:1, color: 'skyblue', fontSize: 14, textAlign: 'center' }}>{'Male ' + pokemon.gender[0].toString() + '%'}</Text>
                <Text style={{ flex:1, color: 'crimson', fontSize: 14, textAlign: 'center' }}>{'Female ' + pokemon.gender[1].toString() + '%'}</Text>
              </View>
            </View>
            : <View style={{ alignItems: 'center', alignSelf: 'stretch', marginTop: 3, backgroundColor: 'white', borderRadius: 10, margin: 10, padding: 15 }}>
              <Text style={{ color: 'black', textAlign: 'center' }}>No gender</Text>
            </View>
        }
      </View>
      <Text style={styles.body}>{pokemon.description}</Text>
    </ScrollView >
  );
}

interface PokemonDetail {
  name: string,
  number: string,
  description: string,
  types: Array<string>,
  species: string,
  gender: Array<number>,
  abilities: {
    normal: Array<string>,
    hidden: Array<string>
  },
  sprite: string;
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1, justifyContent: 'center', flexDirection: 'column', alignContent: 'center'
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
  },
  top: {
    height: 50,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'crimson'
  }
})

export default PokemonScreen;