import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {
  useFonts,
  Livvic_100Thin,
  Livvic_100Thin_Italic,
  Livvic_200ExtraLight,
  Livvic_200ExtraLight_Italic,
  Livvic_300Light,
  Livvic_300Light_Italic,
  Livvic_400Regular,
  Livvic_400Regular_Italic,
  Livvic_500Medium,
  Livvic_500Medium_Italic,
  Livvic_600SemiBold,
  Livvic_600SemiBold_Italic,
  Livvic_700Bold,
  Livvic_700Bold_Italic,
  Livvic_900Black,
  Livvic_900Black_Italic,
} from '@expo-google-fonts/livvic';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Livvic_100Thin,
    Livvic_100Thin_Italic,
    Livvic_200ExtraLight,
    Livvic_200ExtraLight_Italic,
    Livvic_300Light,
    Livvic_300Light_Italic,
    Livvic_400Regular,
    Livvic_400Regular_Italic,
    Livvic_500Medium,
    Livvic_500Medium_Italic,
    Livvic_600SemiBold,
    Livvic_600SemiBold_Italic,
    Livvic_700Bold,
    Livvic_700Bold_Italic,
    Livvic_900Black,
    Livvic_900Black_Italic,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();

    } 
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
              name="(pages)" 
              options={{ headerShown: false}}
             />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

import { Provider } from 'react-redux';
import { store } from '@/common/store/store';