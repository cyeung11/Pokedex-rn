import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BottomBar: React.FC<{title: string;}> = ({title}) => {
    return <View style={styles.bottom}>
        <Text style={styles.bottomTitle}>{title}</Text>
    </View> 
};

const styles = StyleSheet.create({
    bottom : {
        height: 55,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: 'crimson',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
    },
    bottomTitle: {
        color: 'white',
        fontSize: 22,
    }
});

export default BottomBar;