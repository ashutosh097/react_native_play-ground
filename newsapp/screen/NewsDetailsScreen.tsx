import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';


function NewsDetailsScreen() {
    const route = useRoute();
    const { article } = route.params as { article: any };

    return (
        <ScrollView style={styles.container}>
            {article.urlToImage && (
                <Image source={{ uri: article.urlToImage }} style={styles.image} />
            )}

            <View style={styles.content}>
                <Text style={styles.title}>{article.title}</Text>

                <View style={styles.meta}>
                    <Text style={styles.source}>{article.source?.name}</Text>
                    <Text style={styles.date}>
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </Text>
                </View>

                {article.author && (
                    <Text style={styles.author}>By {article.author}</Text>
                )}

                {article.description && (
                    <Text style={styles.description}>{article.description}</Text>
                )}

                {article.content && (
                    <Text style={styles.contentText}>{article.content}</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    image: { width: '100%', height: 220 },
    content: { padding: 16 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    source: { fontSize: 14, color: '#666' },
    date: { fontSize: 14, color: '#999' },
    author: { fontSize: 14, color: '#555', marginBottom: 10 },
    description: { fontSize: 16, marginBottom: 10 },
    contentText: { fontSize: 15, color: '#333' },
    button: {
        marginTop: 20,
        padding: 14,
        backgroundColor: '#007BFF',
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default NewsDetailsScreen