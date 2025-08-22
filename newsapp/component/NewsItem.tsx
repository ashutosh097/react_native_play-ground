import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

//Your API key is: fbf82a3f6b6a4510bb3778aa07ec5e03

type ArticleProps = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Props = {
  article: ArticleProps;
  onPress?: (event: GestureResponderEvent) => void;
};

function NewsItem(props:Props) {
  const{article, onPress} =props

  const image = article?.urlToImage;
  const title = article?.title || 'No title';
  const description = article?.description || '';
  const source = article?.source?.name || 'Unknown';
  const date = article?.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString()
    : 'No Date';

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        {!!description && (
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        )}
        <View style={styles.footer}>
          <Text style={styles.source}>{source}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 6,
    marginRight: 10,
  },
  placeholderImage: {
    width: 90,
    height: 90,
    backgroundColor: '#ccc',
    borderRadius: 6,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  source: {
    fontSize: 12,
    color: '#888',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default NewsItem;
