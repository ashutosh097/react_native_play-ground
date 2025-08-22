import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useNavigation } from '@react-navigation/native';

function SplashScreen() {
    const navigation = useNavigation()
    useEffect(() => {
        const interval = setInterval(() => {
           navigation.navigate("Home")
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={[styles.container, { justifyContent: 'center', flex: 1, backgroundColor: 'blue' }]}>
            <Text style={styles.text}>Hello MR. Ashutosh, It is Timer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 8,
        margin: 16,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    counter: {
        fontSize: 64,
        marginBottom: 40,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBlock: 10,
        marginBottom: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 24,
    },
    text: {
        color: 'grey',
        fontSize: 18,
    },
});

export default SplashScreen;
