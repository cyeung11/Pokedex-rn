import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType, StatusBar } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import PokemonScreen from './screen/PokemonScreen';
import { Pokemon } from './component/PokeItem';


const MainStack = createStackNavigator();

export type PokeScreenList = {
  HomeScreen: undefined,
  PokemonScreen: {
    pokemon: Pokemon
  };
}

export type NavProps<T extends keyof PokeScreenList> = {
  navigation: StackNavigationProp<PokeScreenList, T>,
  route: RouteProp<PokeScreenList, T>;
}


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='crimson'/>
      <MainStack.Navigator headerMode='none'>
            <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
            <MainStack.Screen name="PokemonScreen" component={PokemonScreen}/>
        </MainStack.Navigator>
    </NavigationContainer>
  );
}



export default App;