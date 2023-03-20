import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from "react-native-vector-icons"
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  async function logout() {
    try {
      navigation.navigate("login")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>

        <ImageBackground
          source={require('../images/bg.webp')}
          style={{ padding: 20 }}>
          <Image source={require('../images/user1.jpg')}
            style={{ width: 50, height: 50, borderRadius: 40, marginBottom: 10 }} />
          <Text style={{ color: "#fff", fontSize: 18, fontFamily: 'roboto' }}>Gagan pal</Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: "#fff", fontSize: 18, fontFamily: 'roboto' }}>288 Conin</Text>
            <FontAwesome5 name={"coins"}
              style={{ color: "#fff", fontSize: 18, fontFamily: 'roboto', marginTop: 5, marginLeft: 5 }} />

          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <FontAwesome5 name={"retweet"}
              style={{ color: "#000", fontSize: 18, fontFamily: 'roboto', marginTop: 5, marginLeft: 5 }} /> */}
            <Text style={{ fontWeight: 700, fontSize: 18, marginLeft: 10 }}>Custome text info</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { logout() }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            {/* <FontAwesome5 name={"sign"}
              style={{ color: "#000", fontSize: 18, fontFamily: 'roboto', marginTop: 5, marginLeft: 5 }} /> */}
            <Text style={{ fontWeight: 700, fontSize: 18, marginLeft: 10 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})