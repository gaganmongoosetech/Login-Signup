import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


export default function LogoutScreen() {
  const navigation = useNavigation();

  // async function logOut() {
  //   try {
  //     navigation.navigate("login")
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={logOut}>
        <Text style={styles.buttonText}>Sign out 🤷</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe2ff'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 16,
    fontWeight: '500',
    color: '#7f78d2'
  },
  button: {
    flexDirection: 'row',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#481380'
  },
  buttonText: {
    color: '#ffe2ff',
    fontSize: 24,
    marginRight: 5
  }
})