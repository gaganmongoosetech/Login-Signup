import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, icon, placeholder, types }) => {
  return (
    <View style={{
      width: "85%",
      height: 50,
      borderRadius: 10,
      borderWidth: 0.5,
      marginTop: 50,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20
    }}>
      <Image source={icon} style={{ width: 25, height: 25 }} />
      <TextInput
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        style={{ marginLeft: 10 }}
        secureTextEntry={types == 'password' ? true : false}
      />
      {/* keyboardType={types ? types : "default"}  ager types a raha hai tu types keyboard nahi tu default */}
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})