import AsyncStorage from '@react-native-async-storage/async-storage';


export async function saveToCache(key, value){
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error saving to cache:', e);
  }
};


export async function loadFromCache(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error loading from cache:', e);
    return null;
  }
};

export async function hasData(key) {
  try {
    const jsonValue = await AsyncStorage.getAllKeys();
    return jsonValue.find(keys=> keys==key)
  } catch (e) {
    console.error('Error loading from cache:', e);
    return null;
  }
};

export async function clearCache (key){
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error clearing cache:', e);
  }
};
