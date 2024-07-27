// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#3c0a6b" },
    //       headerTintColor: "white",
    //       drawerActiveBackgroundColor: "#f0e1ff",
    //       drawerActiveTintColor: "#3c0a6b",
    //       drawerStyle: {
    //         backgroundColor: "#fff",
    //       },
    //     }}
    //   >
    //     <Drawer.Screen
    //       name='Welcome'
    //       component={WelcomeScreen}
    //       options={{
    //         drawerLabel: "Welcome Screen",
    //         drawerIcon: ({ color, size }) => (
    //           <Ionicons
    //             name='home'
    //             color={color}
    //             size={size}
    //           />
    //         ),
    //       }}
    //     />
    //     <Drawer.Screen
    //       name='User'
    //       component={UserScreen}
    //       options={{
    //         drawerIcon: ({ color, size }) => (
    //           <Ionicons
    //             name='person'
    //             color={color}
    //             size={size}
    //           />
    //         ),
    //       }}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name='home'
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name='person'
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

