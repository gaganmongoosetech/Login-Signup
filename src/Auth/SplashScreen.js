import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      checklogin()
      // navigation.navigate("login")
    }, 3000);
  }, [])

  const checklogin = async () => {
    const nEmail = await AsyncStorage.getItem("EMAIL");
    const nPass = await AsyncStorage.getItem("PASSWORD");
    console.log(nEmail + " " + nPass)

    if (nEmail !== null || nEmail !== undefined || nEmail !== "") {
      navigation.navigate("home")
    } else (
      navigation.navigate("login")
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{ fontSize: 20, fontWeight: 700, color: "#000" }}>Splash Screen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})