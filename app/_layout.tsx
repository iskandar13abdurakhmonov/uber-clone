
import {SplashScreen, Stack} from 'expo-router';
import 'react-native-reanimated';
import './global.css'
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {ClerkProvider} from "@clerk/clerk-expo";

export default function RootLayout() {

    const [loaded] = useFonts({
        "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
        "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
        "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
        "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
        "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
        Jakarta: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    })

    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

    useEffect(() => {
        if(loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
      <ClerkProvider publishableKey={publishableKey}>
          <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(root)" options={{ headerShown: false }}/>
              <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
              <Stack.Screen name="+not-found" />
          </Stack>
      </ClerkProvider>
  );
}
