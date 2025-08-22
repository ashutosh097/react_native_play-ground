import React from "react"
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

type GreetingCardProps = {
  name: string;
  message: string;
};

const GreetingCard=({name, message}:GreetingCardProps)=>{
    return (
        <View style ={styles.card}>
          <Text style={styles.name}>Hi,{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 16,
    marginTop: 16,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 16,
    color: '#666',
  },
});
export default GreetingCard