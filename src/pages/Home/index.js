import React from 'react';
import {Text, Button, View} from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  function navigateToUsers() {
    navigation.navigate('Users');
  }

  function navigateToFeed() {
    navigation.navigate('Feed');
  }

  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Vá para usuários"
        onPress={navigateToUsers}
        color={'#7159c1'}
      />
      <Button
        title="Vá para Instagram"
        onPress={navigateToFeed}
        color={'#7159c1'}
      />
    </View>
  );
}
