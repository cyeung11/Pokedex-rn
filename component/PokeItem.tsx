import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';


const PokeItem: React.FC<{name: string, image: ImageSourcePropType, columnWidth: number}> = ({name, image, columnWidth}) => {
    return <View style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        width: columnWidth*0.9, 
        height: columnWidth*0.9,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'grey',
        marginVertical: 5
    }}>
        <Image style={{width: '75%', height: '75%', resizeMode: 'contain'}} 
            source={image}/>
        <Text style={styles.title}>{name}</Text>
        </View>
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'center',
        borderWidth: 2,
    },
    image : {
        height: 100,
        width: 100,
    },
    title: {
        color: 'black',
        fontSize: 12,
    }
});

export default PokeItem;