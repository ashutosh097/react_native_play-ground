import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const data = [
  {id: '1', title: 'Card 1', description: 'This is card 1'},
  {id: '2', title: 'Card 2', description: 'This is card 2'},
  {id: '3', title: 'Card 3', description: 'This is card 3'},
  {id: '4', title: 'Card 4', description: 'This is card 4'},
  {id: '5', title: 'Card 5', description: 'This is card 5'},
  {id: '6', title: 'Card 6', description: 'This is card 6'},
];
function ResponsiveCard() {
  const {width} = useWindowDimensions();
  const cardWidth = width / (width > 600 ? 3 : 2) - 20;

  const renderItem = ({item}: any) => (
    <View style={[styles.card, {width: cardWidth}]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={width > 600 ? 3 : 2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  list: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
});

export default ResponsiveCard;
