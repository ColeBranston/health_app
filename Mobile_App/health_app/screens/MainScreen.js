import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import NavBar from "../components/NavBar"

const MainScreen = () => {
    const [counter, setCounter] = useState(0)
          return (
            <SafeAreaView style={styles.safeArea}> {/* Fixed 'styles' prop */}
              <View style={styles.screen}>
                <View style={styles.container1}>
                  <Text style={styles.counterText}>{counter}</Text>
                </View>
                <View style={styles.container2}>
            
                  <Pressable style={styles.myButton} title={"Increase"} onPress={() => {
                    setCounter(counter + 1)
                  }}> <Text style={styles.myButtonText}>Increase</Text></Pressable>
        
                  <Pressable style={styles.myButton} title='Decrease'onPress={() => {
                    if (counter > 0){
                      setCounter(counter - 1)
                    }
                  }}><Text style={styles.myButtonText}>Decrease</Text></Pressable>
        
                  <Pressable style={styles.myButton} title='Clear Counter'onPress={() => {
                    setCounter(0)
                  }}><Text style={styles.myButtonText}>Clear</Text></Pressable>
                </View>
                <NavBar/>
              </View>
            </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, /* Ensuring it takes full screen */
    backgroundColor: "white",
  },
  screen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  container1: {
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    height:"50%",
  },
  counterText: { /* Fixed incorrect key ('Text' → 'text') */
    color: "black", /* Changed text color to make it visible */
    fontSize: 80, /* Added better readability */
  },
  /* …other styles… */
  myButton: {
    backgroundColor: "black",
    width: 200,           // make button wider
    height: 60,           // make button taller
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 8,
  },
  myButtonText: {
    color: "white",
    fontSize: 18,
  },
});