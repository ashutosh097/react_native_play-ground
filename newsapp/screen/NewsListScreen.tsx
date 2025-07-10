import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList, RefreshControl, ActivityIndicator
} from 'react-native';
import NewsItem from '../component/NewsItem';
import { fetchData } from '../component/ApiService';
import { loadFromCache, saveToCache } from '../component/CacheData';
import { Text } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NEWS_KEY = 'news_articles';

function NewsListScreen() {

  const navigationRoute = useNavigation();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10

  async function onRefresh() {
    setRefreshing(true);
    await loadNews(1, true);
  };



  async function handleLoadMore() {
    if (!loading && hasMore) {
      loadNews(page + 1);
    }
  };


  async function loadCachedArticles() {
    const cachedData = await loadFromCache(NEWS_KEY);
    if (cachedData) {
      setArticles(cachedData);
    }
  };



  async function loadNews(pageNumber = 1, isRefresh = false) {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    try {
      const data = await fetchData(pageNumber);
      if (data?.articles) {
        let updatedArticles;

        if (isRefresh || pageNumber === 1) {
          updatedArticles = data.articles;
        } else {
          updatedArticles = [...articles, ...data.articles];
        }

        setArticles(updatedArticles);
        saveToCache(NEWS_KEY, updatedArticles);

        const totalResults = data.totalResults || 0;
        const totalLoaded = (pageNumber - 1) * pageSize + data.articles.length;

        setHasMore(totalLoaded < totalResults);
        setPage(pageNumber);
      }

    } catch (err) {

    } finally {
      setLoading(false);
      if (isRefresh) setRefreshing(false);

    }
  }

  useEffect(() => {
    loadCachedArticles().then(() => loadNews(1));
  }, []);

  return (
    <View style={styles.container}>
      {articles.length == 0 && (
        <ActivityIndicator size="large" color="#007BFF" style={{ margin: 16 }} />
      )}
      {articles.length != 0 && <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <NewsItem article={item} onPress={() => navigationRoute.navigate('NewsDetail', { article: item })} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && !refreshing ? (
            <ActivityIndicator size="small" color="#000" style={{ margin: 16 }} />
          ) : null
        }
        ListEmptyComponent={
          !loading && !refreshing ? (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>
              No news found.
            </Text>
          ) : null
        }

      />}
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

export default NewsListScreen;
