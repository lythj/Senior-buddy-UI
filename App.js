const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Dashboard from "./screens/Dashboard";
import Buffer from "./screens/Buffer";
import StartAConversation from "./screens/StartAConversation";
import ResponseExample1 from "./screens/ResponseExample1";
import ChatExample1 from "./screens/ChatExample1";
import EmptyConversation from "./screens/EmptyConversation";
import Dashboard1 from "./screens/Dashboard1";
import WelcomeScreen3 from "./screens/WelcomeScreen3";
import WelcomeScreen2 from "./screens/WelcomeScreen2";
import WelcomeScreen1 from "./screens/WelcomeScreen1";
import LoadingScreen from "./screens/LoadingScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Raleway_medium: require("./assets/fonts/Raleway_medium.ttf"),
    Raleway_semibold: require("./assets/fonts/Raleway_semibold.ttf"),
    Raleway_bold: require("./assets/fonts/Raleway_bold.ttf"),

  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="EmptyConversation"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Buffer"
              component={Buffer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartAConversation"
              component={StartAConversation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResponseExample1"
              component={ResponseExample1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatExample1"
              component={ChatExample1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmptyConversation"
              component={EmptyConversation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard1"
              component={Dashboard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen3"
              component={WelcomeScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen2"
              component={WelcomeScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen1"
              component={WelcomeScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LoadingScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
