import React, { useEffect, useState } from 'react';
import {View, StyleSheet, SafeAreaView, ImageSourcePropType, ListRenderItem, FlatList, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NavProps } from '../App';
import BottomBar from '../component/BottomBar';
import PokeItem, { Pokemon } from '../component/PokeItem';
import PokeData from '../pokedex/PokeData';

const HomeScreen: React.FC<NavProps<'HomeScreen'>> = ({navigation}) => {

    const columnCount = 4;
  
    const [screenWidth, setScreenWith] = useState(Dimensions.get("window").width / columnCount);
  
    const onChange = () => {
      setScreenWith(Dimensions.get("window").width / columnCount);
    };
    
    useEffect(() => {
      Dimensions.addEventListener("change", onChange);
      return () => {
        Dimensions.removeEventListener("change", onChange);
      };
    })
  
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={{flex: 1, backgroundColor:'aliceblue', justifyContent:'center', alignItems: 'center'}}>
            <Image 
              source={require('../image/pokeball.png')} 
              style={{width:'60%', height:'100%', position:'absolute', resizeMode: 'contain'}}/>
            <FlatList
              data={PokeData.PokeData}
              numColumns={columnCount}
              renderItem={({ item }) => {
                return <TouchableOpacity
                  onPress={()=>{
                  navigation.navigate('PokemonScreen', {pokemon: item});
                  }}>
                  <PokeItem pokemon={item} columnWidth={screenWidth}/>
                </TouchableOpacity>
              }}
              columnWrapperStyle={{flex:1, justifyContent: 'flex-start'}}
            />
          </View>
        <BottomBar title={'Pokedex'}/>
      </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    safe: {
      flex: 1,
    },
    container: {
      flex: 1, justifyContent: 'flex-end', flexDirection: 'column',
    },
    bg: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center',
    }
  })
  
  export default HomeScreen;