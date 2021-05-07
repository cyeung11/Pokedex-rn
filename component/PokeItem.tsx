import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';


const PokeItem: React.FC<{pokemon: Pokemon, columnWidth: number}> = ({pokemon, columnWidth}) => {
    const imageWidth = columnWidth * 0.62

    return <View style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: columnWidth*0.88, 
        height: columnWidth*1.1,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: 'lightgrey',
        marginVertical: 5,
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 2,
        marginHorizontal: columnWidth*0.06
    }}>
        <Image style={{width: imageWidth, height: imageWidth, resizeMode: 'contain'}} 
            source={pokemon.image}/>
        <Text style={styles.no}>{'#' + pokemon.id}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        </View>
};

export interface Pokemon {
    name: string,
    id: string,
    image: ImageSourcePropType;
}

const styles = StyleSheet.create({
    image : {
        height: 100,
        width: 100,
    },
    name: {
        color: 'black',
        fontSize: 12,
    },
    no: {
        color: 'grey',
        fontSize: 10,
    }
});

export default PokeItem;