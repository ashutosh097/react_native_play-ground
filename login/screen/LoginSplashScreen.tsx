import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getToken } from '../storage';

const LoginSplashScreen = ({ navigation }: any) => {

  useEffect(() => {
    const showToen = async () => {
      const t = await getToken();
      if (t) {
        navigation.replace('HomeScreen');
      } else {
        navigation.replace('Secure Login');
      }
    };
    showToen();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1976D2" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  text: { marginTop: 16, fontSize: 18, color: '#1976D2' },
});

export default LoginSplashScreen;
