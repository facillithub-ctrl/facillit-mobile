import '../styles/global.css'; // Importação do CSS Global
import { Stack } from "expo-router";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Importe aqui o AccessibilityFab criado anteriormente se desejar que ele flutue em tudo

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#42047e" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#ffffff' } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/login" />
      </Stack>
      {/* <AccessibilityFab /> */} 
    </>
  );
}