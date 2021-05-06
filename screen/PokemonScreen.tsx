import React, { useEffect, useState } from 'react';
import {View, StyleSheet, SafeAreaView, Image, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { NavProps } from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';


const PokemonScreen: React.FC<NavProps<'PokemonScreen'>> = ({navigation, route}) => {

  const [isLoading, setLoading] = useState(true);
  const [pokemonDetail, setPokemonDetail] = useState<Array<PokemonDetail> | null>(null);
  
    useEffect(()=> {
      fetch('https://pokeapi.glitch.me/v1/pokemon/' + route.params.pokemonId)
      .then((response)=> response.json())
      .then((json)=> setPokemonDetail(json))
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false))
    }, [])

    if (pokemonDetail != null) {
    console.log(pokemonDetail[0].sprite)
    }
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity
              onPress={()=>{
                navigation.goBack();
              }}>
              <Icon name='angle-left' size={30} color='white' style={{paddingHorizontal:15}}/>
            </TouchableOpacity>
            <Text style={{
              color: 'white',
              fontSize: 22
            }}>Pokemon</Text>
          </View> 

          <View style={{flex:1}}>
            {(isLoading || pokemonDetail === null || pokemonDetail.length == 0)
              ? <ActivityIndicator size='large' color='crimson'/>
              :  <View style={styles.container}>
                <Image style={{width:120, height: 120}} source={
                  {uri: pokemonDetail[0].sprite}
                }/>
                <Text style={styles.title}>{pokemonDetail[0].name}</Text>
                <Text style={styles.body}>{pokemonDetail[0].description}</Text>
                </View>
            }
          </View>
     
        </View>
      </SafeAreaView>
    );
  }
  
  interface PokemonDetail {
    name: string,
    description: string,
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
      fontSize: 15,
      fontWeight: 'bold'
    },
    body: {
      color: 'black',
      fontSize: 12
    },
    top : {
      height: 60,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: 'crimson'
    }
  })
  
  export default PokemonScreen;