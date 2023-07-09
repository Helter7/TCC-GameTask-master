import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, theme } from 'react-native-design-system';
import { NestableScrollContainer } from 'react-native-draggable-flatlist';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS, FONT, SIZES } from '../theme/theme';

import { useEffect } from 'react';
import { left } from '../assets';
import { AddGoal, ScreenHeaderBtn } from '../components';

const Add = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ScreenHeaderBtn
          iconUrl={left}
          dimension="70%"
          handlePress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <GestureHandlerRootView>
        <ThemeProvider theme={theme}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Novo Objetivo</Text>
          </View>
          <NestableScrollContainer showsVerticalScrollIndicator={false}>
            <AddGoal navigation={navigation} />
          </NestableScrollContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
export default Add;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    padding: SIZES.small,
  },
});
