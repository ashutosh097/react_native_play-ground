import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { clearToken } from '../storage';

const LoginHomeScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    clearToken();
    navigation.replace('Secure Login'); // or navigation.navigate('UserLogin')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, color: '#1976D2' },
});

export default LoginHomeScreen;
