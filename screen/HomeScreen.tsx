import React, { useEffect, useState } from 'react';
import {View, StyleSheet, SafeAreaView, ImageSourcePropType, ListRenderItem, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { NavProps } from '../App';
import BottomBar from '../component/BottomBar';
import PokeItem from '../component/PokeItem';
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
  
    const renderRows: ListRenderItem<{id: string, name: string, image: ImageSourcePropType}> = ({ item }) => (
      <TouchableOpacity
        style={{backgroundColor: 'white'}}
        onPress={()=>{
         navigation.navigate('PokemonScreen', {pokemonId: item.id, name: item.name, image: item.image});
        }}>
        <PokeItem name={item.name} image={item.image} columnWidth={screenWidth}/>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={{flex: 1, backgroundColor:'white'}}>
            <FlatList
              data={PokeData.PokeData}
              numColumns={columnCount}
              renderItem={renderRows}
              columnWrapperStyle={{flex:1, justifyContent: 'space-around'}}
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
    }
  })
  
  export default HomeScreen;