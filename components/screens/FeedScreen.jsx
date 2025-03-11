import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { Card, Avatar, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FeedScreen = () => {
  const storiesData = [
    { id: '1', avatar: 'https://via.placeholder.com/150/FF0000' },
    { id: '2', avatar: 'https://via.placeholder.com/150/00FF00' },
    { id: '3', avatar: 'https://via.placeholder.com/150/0000FF' },
    { id: '4', avatar: 'https://via.placeholder.com/150/FFFF00' },
    { id: '5', avatar: 'https://via.placeholder.com/150/00FFFF' },
  ];

  const postsData = [
    {
      id: '1',
      userName: 'John Doe',
      userAvatar: 'https://via.placeholder.com/50/000000',
      postText: '¡Hola! Esta es mi primera publicación.',
      postImage: 'https://via.placeholder.com/300',
      time: '2h',
    },
    {
      id: '2',
      userName: 'Jane Smith',
      userAvatar: 'https://via.placeholder.com/50/111111',
      postText: 'Miren esta foto increíble que tomé.',
      postImage: 'https://via.placeholder.com/300/FF9900',
      time: '4h',
    },
  ];

  const renderStoryItem = ({ item }) => (
    <View style={styles.storyItem}>
      <Avatar
        size="medium"
        rounded
        source={{ uri: item.avatar }}
        containerStyle={styles.storyAvatar}
      />
      {/* Podrías agregar un Text debajo del avatar si quieres nombre, etc. */}
    </View>
  );

  const renderPostItem = ({ item }) => (
    <Card containerStyle={styles.postCard}>
      <View style={styles.postHeader}>
        <Avatar
          size="small"
          rounded
          source={{ uri: item.userAvatar }}
          containerStyle={styles.postAvatar}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
      </View>

      {item.postText ? <Text style={styles.postText}>{item.postText}</Text> : null}

      {item.postImage ? (
        <Card.Image
          source={{ uri: item.postImage }}
          style={styles.postImage}
        />
      ) : null}
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>facebook</Text>
        <View style={styles.headerIcons}>
          <Icon name="magnify" size={25} color="#000" style={styles.icon} />
          <Icon name="facebook-messenger" size={25} color="#000" style={styles.icon} />
        </View>
      </View>

      <View style={styles.createPostContainer}>
        <View style={styles.createPostRow}>
          <Avatar
            size="medium"
            rounded
            source={{ uri: 'https://via.placeholder.com/100/333333' }}
          />
          <Input
            placeholder="What's on your mind?"
            containerStyle={styles.inputContainer}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.postOptionsContainer}>
          <Button
            type="clear"
            icon={<Icon name="video" size={20} color="red" />}
            title="Live"
            titleStyle={styles.postOptionText}
          />
          <Button
            type="clear"
            icon={<Icon name="image" size={20} color="green" />}
            title="Photo"
            titleStyle={styles.postOptionText}
          />
          <Button
            type="clear"
            icon={<Icon name="map-marker" size={20} color="red" />}
            title="Check In"
            titleStyle={styles.postOptionText}
          />
        </View>
      </View>

      <View style={styles.storiesContainer}>
        <FlatList
          data={storiesData}
          renderItem={renderStoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Lista de Publicaciones (Vertical) */}
      <FlatList
        data={postsData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2, 
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4267B2', 
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },

  createPostContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  createPostRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 8,
  },
  postOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    marginTop: 8,
    paddingTop: 8,
  },
  postOptionText: {
    marginLeft: 5,
  },

  storiesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  storyAvatar: {
    borderWidth: 2,
    borderColor: '#4267B2',
  },

  postCard: {
    marginBottom: 10,
    borderRadius: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  postAvatar: {
    backgroundColor: '#ccc',
  },
  userName: {
    fontWeight: 'bold',
  },
  postTime: {
    color: '#666',
    fontSize: 12,
  },
  postText: {
    marginVertical: 8,
  },
  postImage: {
    marginTop: 8,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
