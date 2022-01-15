import React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {Container, ResponsiveText} from '../../components';
import styles from './index';

const Profile = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      image: require('../../assets/Images/food1.png'),
      title: 'All',
    },
    {
      id: '2',
      image: require('../../assets/Images/food2.png'),

      title: 'Fast Food',
    },
    {
      id: '3',
      image: require('../../assets/Images/food3.png'),

      title: 'Sea Food',
    },
    {
      id: '4',
      image: require('../../assets/Images/food4.png'),

      title: 'Asian Food',
    },
    {
      id: '5',
      image: require('../../assets/Images/food5.png'),

      title: 'Asian Food',
    },
    {
      id: '6',
      image: require('../../assets/Images/food6.png'),

      title: 'Asian Food',
    },
    {
      id: '7',
      image: require('../../assets/Images/food7.png'),

      title: 'Asian Food',
    },
    {
      id: '8',
      image: require('../../assets/Images/food8.png'),

      title: 'Asian Food',
    },
    {
      id: '9',
      image: require('../../assets/Images/food9.png'),

      title: 'Asian Food',
    },
  ];
  return (
    <Container>
      <View style={styles.mainContainer}>
        <View>
          <Image
            source={require('../../assets/Images/profile1.png')}
            resizeMode="contain"
            style={{
              width: 100,
              marginTop: 10,
              marginLeft: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.editProfile}>
            <ResponsiveText style={{color: '#fff', fontSize: 3}}>
              Edit Profile
            </ResponsiveText>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <ResponsiveText style={styles.firstName}>
            David <ResponsiveText style={styles.lastName}>Bruno</ResponsiveText>
          </ResponsiveText>
          <ResponsiveText style={styles.description}>
            Davidbruno@gmail.com
          </ResponsiveText>
          <ResponsiveText style={styles.description1}>
            Rhoncus ipsum eget tempus. Present fermentum sa rhoncus.
          </ResponsiveText>
        </View>
      </View>
      <View style={styles.label}>
        <View style={styles.recipe}>
          <ResponsiveText style={styles.labelNumber}>109</ResponsiveText>
          <ResponsiveText style={styles.labelText}>Recipes</ResponsiveText>
        </View>
        <View style={styles.viewers}>
          <ResponsiveText style={styles.labelNumber}>1.5 M</ResponsiveText>
          <ResponsiveText style={styles.labelText}>Viewers</ResponsiveText>
        </View>
        <View style={styles.saved}>
          <ResponsiveText style={styles.labelNumber}>71</ResponsiveText>
          <ResponsiveText style={styles.labelText}>Saved</ResponsiveText>
        </View>
      </View>

      <FlatList
        data={DATA}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image style={styles.cardImage} source={item.image} />
          </View>
        )}
      />
    </Container>
  );
};

export default Profile;
