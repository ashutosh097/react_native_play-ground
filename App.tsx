import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, ScrollView, StyleSheet, View } from 'react-native';
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
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation}) {
  const screens = [
    { name: 'Counter', screen: 'Counter' },
    { name: 'Greeting Cards', screen: 'Greeting' },
    { name: 'Toggle Visibility', screen: 'Toggle' },
    { name: 'Timer', screen: 'Timer' },
    { name: 'Input Handling', screen: 'Input' },
    { name: 'Todo List', screen: 'Todo' },
    { name: 'Card Grid', screen: 'Grid' },
    { name: 'Memoized Component', screen: 'Memo' },
    { name: 'Fetch Users', screen: 'Fetch' },
    { name: 'Dark Mode', screen: 'DarkMode' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Coding Assignments</Text>
      {screens.map(({ name, screen }) => (
        <View key={screen} style={styles.buttonWrapper}>
          <Button
            key={screen}
            title={name}
            onPress={() => screen==="Greeting" ?navigation.navigate(screen,{name:"Ashutosh"}): navigation.navigate(screen)}
          />
        </View>
      ))}
    </ScrollView>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen name="Toggle" component={ToggleVisibilityScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Input" component={InputHandlingScreen} />
        <Stack.Screen name="Todo" component={TodoListScreen} />
        <Stack.Screen name="Grid" component={ResponsiveCard} />
        <Stack.Screen name="Memo" component={MemoScreen} />
        <Stack.Screen name="Fetch" component={APIFetchScreen} />
        <Stack.Screen name="DarkMode" component={DarkModeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
  buttonWrapper: {
    marginBottom: 12,
  }
});
