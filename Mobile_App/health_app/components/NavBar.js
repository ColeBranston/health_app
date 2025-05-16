// NavBar.js
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.navText}>Home</Text>
      </Pressable>

      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.navText}>Details</Text>
      </Pressable>

      <Pressable
        style={styles.navButton}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.navText}>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    gap: 15,
  },
  navButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  navText: {
    color: 'white',
    fontSize: 20,
  },
});
