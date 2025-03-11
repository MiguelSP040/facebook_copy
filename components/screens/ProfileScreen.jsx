import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  const userDetails = [
    { icon: 'home-map-marker', title: 'Current City', subtitle: 'Hometown' },
    { icon: 'heart-outline', title: 'Relationship Status', subtitle: 'Single' },
    { icon: 'account-group', title: 'Friends', subtitle: '230 friends' },
    // Agrega más detalles según tu preferencia
  ];

  return (
    <View style={styles.container}>
      {/* Contenedor de la portada */}
      <View style={styles.coverContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/800x300.png' }}
          style={styles.coverImage}
        />
        {/* Contenedor para superponer la foto de perfil */}
        <View style={styles.profileImageContainer}>
          <Avatar
            size="large"
            rounded
            source={{ uri: 'https://via.placeholder.com/150.png' }}
            containerStyle={styles.profileAvatar}
          />
          {/* Ícono de cámara (opcional) para simular la acción de cambiar foto */}
          <Icon
            name="camera"
            size={22}
            color="#fff"
            style={styles.cameraIcon}
          />
        </View>
      </View>

      {/* Sección de información del perfil */}
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>Lorem Ipsum</Text>
        
        {/* Botón para “Agregar a Historia” */}
        <Button
          title="Add to Story"
          buttonStyle={styles.storyButton}
          icon={
            <Icon
              name="plus-circle-outline"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
          }
        />

        {/* Tarjeta con detalles básicos del perfil */}
        <Card containerStyle={styles.detailsCard}>
          {userDetails.map((item, index) => (
            <ListItem key={index} containerStyle={styles.listItem}>
              <Icon name={item.icon} size={24} style={styles.detailIcon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </Card>

        {/* Botón para “Editar detalles públicos” */}
        <Button
          title="Edit Public Details"
          buttonStyle={styles.editButton}
          icon={
            <Icon
              name="pencil-outline"
              size={20}
              color="#fff"
              style={{ marginRight: 8 }}
            />
          }
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Contenedor de la portada
  coverContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  // Superposición de la foto de perfil
  profileImageContainer: {
    position: 'absolute',
    bottom: -40,
    alignSelf: 'center',
  },
  profileAvatar: {
    borderWidth: 3,
    borderColor: '#fff', // para simular un borde blanco alrededor de la foto
  },
  cameraIcon: {
    position: 'absolute',
    right: -5,
    bottom: -5,
    backgroundColor: '#0008',
    borderRadius: 20,
    padding: 4,
  },
  // Contenedor de la info principal
  infoContainer: {
    marginTop: 50, // Para compensar la superposición de la foto de perfil
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  storyButton: {
    marginVertical: 10,
    backgroundColor: '#4267B2', // color tipo "Facebook"
    width: '70%',
    borderRadius: 6,
  },
  detailsCard: {
    width: '100%',
    borderRadius: 8,
    marginTop: 10,
  },
  listItem: {
    backgroundColor: 'transparent',
  },
  detailIcon: {
    marginRight: 10,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#4267B2',
    width: '70%',
    borderRadius: 6,
  },
});
