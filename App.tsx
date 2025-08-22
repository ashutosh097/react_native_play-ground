import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, ScrollView, StyleSheet} from 'react-native';
import CounterScreen from './assignment component/CounterScreen';
import GreetingScreen from './assignment component/GreetingScreen';
import ToggleVisibilityScreen from './assignment component/ToggleVisibilityScreen';
import TimerScreen from './assignment component/TimerScreen';
import InputHandlingScreen from './assignment component/InputHandlingScreen';
import TodoListScreen from './assignment component/TodoListScreen';
import ResponsiveCard from './assignment component/ResposnsiveCardScreen';
import MemoScreen from './assignment component/MemoScreen';
import DarkModeScreen from './assignment component/DarkModeScreen';
import APIFetchScreen from './assignment component/APICallingScreen';
import SplashScreen from './assignment component/SpalshScreen';
import { NewAppScreen } from '@react-native/new-app-screen';
import NewsListScreen from './newsapp/screen/NewsListScreen';
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation()
  
  const screens = [
    {name: 'News App', screen: 'NewsApp'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Coding Assignments 2</Text>
      {screens.map(({name, screen}) => (
        <Button
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
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewsApp" component={NewsListScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center'},
  title: {fontSize: 20, marginBottom: 20, fontWeight: 'bold'},
});
