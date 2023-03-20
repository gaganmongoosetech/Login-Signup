import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {

  const navigation = useNavigation();


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [bademail, setBadEmail] = useState();
  const [badpassword, setBadPassword] = useState();

  const Validate = () => {
    if (email == "") {
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == "") {
        setBadPassword(true);
      } else {
        setBadPassword(false);
      }
    }

    getData();
  }

  const getData = async () => {
    try {
      const nEmail = await AsyncStorage.getItem('EMAIL');
      const nPass = await AsyncStorage.getItem('PASSWORD');
      console.log(nEmail, nPass)

      if (email === nEmail && password === nPass) {
        navigation.navigate("home")
      } else {
        Alert.alert("wrong password!")
      }
    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={require("../images/logo.jpg")} style={{ width: 100, height: 100, marginTop: 100 }} />
      <Text style={{ fontSize: 18, fontWeight: 700, color: "#000", marginTop: 30 }}>Login</Text>

      {/* <CustomTextInput
        placeholder="Enter Email Id"
        icon={require("../images/email.png")}
        Value={email}
        onChangeText={txt => setEmail(txt)}
      /> */}

      <TextInput
        placeholder='Enter your email id'
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          width: "80%",
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: '#f1f1f1',
          paddingLeft: 20,
          color: '#000',
          marginTop: 30,
          elevation: 4
        }}
      />

      {bademail === true && (
        <Text style={{ marginTop: 10, marginLeft: 150, color: "red" }}>
          Please Enter Email Id
        </Text>
      )}
      {/* <CustomTextInput
        types={'password'}
        placeholder="Password"
        icon={require("../images/password.png")}
        Value={password}
        onChangeText={txt => setPassword(txt)}
      /> */}

      <TextInput
        placeholder='Enter password'
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          width: "80%",
          height: 50,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: '#f1f1f1',
          paddingLeft: 20,
          color: '#000',
          marginTop: 40,
          elevation: 4
        }}
      />
      {badpassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 150, color: "red" }}>
          Please Enter password
        </Text>
      )}

      {/* <CustomButton title={"Login"} bgColor={"lightblue"} textColor={"blue"}
        onpress={() => {
          navigation.navigate("Validate")
        }}
      /> */}

      <TouchableOpacity style={{
        width: "85%",
        height: 50,
        backgroundColor: "#000",
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center'
      }} onPress={() => {
        Validate();
      }}>
        <Text style={{ color: "#fff", alignSelf: 'center' }}>Login</Text>
      </TouchableOpacity>


      <Text style={{ fontSize: 22, fontWeight: 700, color: "gray", marginTop: 40 }}
        onPress={() => {
          navigation.navigate("signup")
        }}
      >Create New Account?</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})