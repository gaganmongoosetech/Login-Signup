import { Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../Common/CustomTextInput'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

let lenght = "";

const SignupScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();


  const [badname, setBadName] = useState();
  const [bademail, setBadEmail] = useState();
  const [badmobile, setBadMobile] = useState();
  const [badpassword, setBadPassword] = useState();
  const [badconfirmpassword, setBadConfirmPassword] = useState();
  const [buttonDisabled, setButtonDisabled] = useState();


  const navigation = useNavigation();

  const signup = () => {
    setButtonDisabled(true);
    if (name == "") {
      setBadName(true)
      setButtonDisabled(false);

    } else {
      setBadName(false)
      if (email == "") {
        setBadEmail(true)
        setButtonDisabled(false);

      } else {
        setBadEmail(false)

        if (mobile == "") {
          setBadMobile(true)
          setButtonDisabled(false);

        }
        else if (mobile.lenght < 10) {
          setBadMobile(true)
        } else {
          setBadMobile(false)

          if (password == "") {
            setBadPassword(true)
            setButtonDisabled(false);

          } else {
            setBadPassword(false)
            if (confirmpassword == "") {
              setBadConfirmPassword(true)
            } else {
              setBadConfirmPassword(false)

              if (password !== confirmpassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);

              } else {
                setBadConfirmPassword(false);
                saveDate();
              }
            }
          }
        }
      }
    }
  };



  const saveDate = async () => {
    try {
      await AsyncStorage.setItem("NAME", name);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("MOBILE", mobile);
      await AsyncStorage.setItem("PASSWORD", password);
      console.log('yes');
      navigation.goBack();
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require("../images/logo.jpg")} style={{ width: 100, height: 100, marginTop: 100 }} />
        <Text style={{ fontSize: 18, fontWeight: 700, color: "#000", marginTop: 30 }}>Create New Account</Text>


        <CustomTextInput
          value={name}
          onChangeText={txt => {
            setName(txt)
          }}
          placeholder="Enter Your Name"
          icon={require("../images/user.png")}
        />
        {badname === true && (
          <Text style={{ marginTop: 10, marginLeft: 150, color: 'red' }}>Enter your name</Text>
        )}

        <CustomTextInput
          value={email}
          onChangeText={txt => {
            setEmail(txt)
          }}
          placeholder="Enter Email Id"
          icon={require("../images/email.png")}
        />
        {bademail === true && (
          <Text style={{ marginTop: 10, marginLeft: 150, color: 'red' }}>Enter your email id</Text>
        )}

        <CustomTextInput
          value={mobile}
          onChangeText={txt => {
            setMobile(txt)
          }}
          placeholder="Enter mobile Number"

          icon={require("../images/mobile.png")}
        />
        {
          badmobile === true && (
            <Text style={{ marginTop: 10, marginLeft: 150, color: 'red' }}>Enter your mobile number</Text>
          )
        }

        <CustomTextInput
          value={password}
          onChangeText={txt => {
            setPassword(txt)
          }}
          types={'password'}
          placeholder="Password"
          icon={require("../images/password.png")}
        />
        {badpassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 150, color: 'red' }}>Enter your password</Text>
        )}

        <CustomTextInput
          value={confirmpassword}
          onChangeText={txt => {
            setconfirmpassword(txt)
          }}
          types={'confirmpassword'}

          placeholder="Confirm password"
          icon={require("../images/password.png")}
        />
        {badconfirmpassword === true && (
          <Text style={{ marginTop: 10, marginLeft: 150, color: 'red' }}>Enter your confirm password</Text>
        )}

        {/* <CustomButton
          title={"Sign up"}
          bgColor={buttonDisabled ? "#BeBeBe" : "#808"}
          textColor={"#fff"}
          onPress={() => {
            onPress();
          }}
          disabled={buttonDisabled}
        /> */}

        <TouchableOpacity
          buttonDisabled={buttonDisabled}
          style={{
            width: "85%",
            height: 50,
            backgroundColor: "#000",
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center'
          }} onPress={() => {
            signup();
          }}>
          <Text style={{ color: "#fff", alignSelf: 'center' }}>Signup</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "gray",
            marginTop: 40,
            textDecorationLine: "underline"
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >Already have accound?</Text>
      </View>
    </ScrollView>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({})