import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useGetWeatherByCoordsQuery } from '../services/WeatherApi';
import Skeleton from '../component/Progress';

const WeatherScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        setErrorMsg('Permission denied');
        return;
      }

      Geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          setErrorMsg(error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    })();
  }, []);

  const { data, error, isLoading, isFetching } = useGetWeatherByCoordsQuery(location, {
    skip: !location,
  });

  if (errorMsg) return <Text>{errorMsg}</Text>;
  if (error) return <Text>Error fetching weather</Text>;
  if (!location || isLoading || isFetching) return <Skeleton />;

  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{data.main.temp}°C</Text>
      <Text style={styles.condition}>{data.weather[0].description}</Text>
      <Text style={styles.humidity}>Humidity: {data.main.humidity}%</Text>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  temp: { fontSize: 48, fontWeight: 'bold' },
  condition: { fontSize: 24, marginVertical: 10 },
  humidity: { fontSize: 18 },
});
