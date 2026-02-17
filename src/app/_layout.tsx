import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, useColorScheme } from 'react-native';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isAndroid = Platform.OS === 'android';

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Android: dedicated route hosting React Navigation native-stack for shared element transitions */}
        {isAndroid && (
          <Stack.Screen
            name="android-app"
            options={{ headerShown: false, animation: 'none' }}
          />
        )}
        {/* iOS: city detail with transparent modal + AppleZoom */}
        {!isAndroid && (
          <Stack.Screen
            name="city/[id]"
            options={{ headerShown: false, presentation: 'transparentModal', animation: 'fade' }}
          />
        )}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
