import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, LogBox, View } from 'react-native';
import { database } from './src/db';
import { Routes } from './src/routes/routes';
import { COLORS } from './src/theme/theme';

LogBox.ignoreAllLogs();

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function startDb() {
      await database.exec();
      setIsLoading(false);
    }
    startDb();
  }, []);

  const [fontsLoaded] = useFonts({
    DMBold: require('./src/assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('./src/assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('./src/assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={200} colors={{ colors: COLORS.primary }} />
    </View>
  ) : (
    <Routes onLayout={onLayoutRootView} />
  );
}
