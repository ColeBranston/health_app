// NavBar.js
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',    // match your nav background
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,         // some breathing room
  },
  navButton: {
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  navText: {
    color: 'white',
    fontSize: 18,
  },
});
