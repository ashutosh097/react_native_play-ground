import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';

function useFetch(url: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return {data, loading, error};
}

function APIFetchScreen() {
  const {data, loading, error} = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching users</Text>;
  return (
    <ScrollView contentContainerStyle={styles.center}>
      {data.map(user => (
        <Text key={user.id}> {user.name}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  count: {fontSize: 50, margin: 20},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    flex: 1,
  },
});
export default APIFetchScreen;
