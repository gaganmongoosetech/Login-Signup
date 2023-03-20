import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, title, bgColor, textColor, disabled }) => {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        style={{
          width: "95%",
          backgroundColor: bgColor,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 50
        }} onpress={() => {
          onPress();
        }}>
        <Text style={{ color: { textColor } }}>{title}</Text>
      </TouchableOpacity>
    </>
  )
}

export default CustomButton;

const styles = StyleSheet.create({})