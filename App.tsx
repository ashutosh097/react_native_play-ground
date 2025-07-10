import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import NewsListScreen from './newsapp/screen/NewsListScreen';
import WeatherScreen from './WeatherApp/screen/WeatherScreen';
import { Provider } from 'react-redux';
import { store } from './WeatherApp/services/store';
import UserLoginScreen from './login/screen/UserLoginScreen';
import ProductListScreen from './product/screens/ProductListScreen';
import DashboardScreen from './ExpenseTracker/presentation/screens/Dashboard';
import LoginSplashScreen from './login/screen/LoginSplashScreen';
import LoginHomeScreen from './login/screen/HomeScreen';
import AddExpenseScreen from './ExpenseTracker/presentation/screens/AddExpenseScreen';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation()

  const screens = [
    { name: 'News App', screen: 'NewsApp' },
    { name: 'Secure Login', screen: 'Splash' },

    { name: 'Weather Report', screen: 'WeatherReport' },
    { name: 'ProductList', screen: 'ProductList' },
    { name: 'Expense Tracker', screen: 'ExpenseTracker' },


  ];
  console.log('Store:', store);


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Coding Assignments 2</Text>
      {screens.map(({ name, screen }) => (
        <Button style={styles.title}
          key={screen}
          title={name}
          onPress={() => navigation.navigate(screen)}
        />
      ))}
    </ScrollView>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewsApp" component={NewsListScreen} />
          <Stack.Screen name="Secure Login" component={UserLoginScreen} />
          <Stack.Screen name="WeatherReport" component={WeatherScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="ExpenseTracker" component={DashboardScreen} />
          <Stack.Screen name="HomeScreen" component={LoginHomeScreen} />
          <Stack.Screen name="Splash" component={LoginSplashScreen} />
          <Stack.Screen name="AddExpence" component={AddExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
});
