import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerItem } from '@react-navigation/drawer';
import NotificationsScreen from './NotificationsScreen';
import LogoutScreen from './LogoutScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomDrawer from './CustomDrawer';
import DrawerHomeScreen from './DrawerHomeScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';




const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: 25,
          fontFamily: "roboto",
          fontSize: 15,
        }
      }}>
      <Drawer.Screen name="DrawerHome" component={DrawerHomeScreen} options={{
        drawerIcon: () => {
          <View style={{ flexDirection: "row" }}>
            <FontAwesome5 name={"home"}
              style={{ color: "#fff", fontSize: 18, fontFamily: 'roboto', marginTop: 5, marginLeft: 5 }} />
          </View>
        }
      }} />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: () => {
            <FontAwesome5 name={"home"} />
          }
        }}
      />
      {/* <Drawer.Screen name="Logout" component={LogoutScreen} /> */}
    </Drawer.Navigator>

  );
}