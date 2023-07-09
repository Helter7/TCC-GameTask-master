import { SafeAreaView, Text, View } from 'react-native';
import { ThemeProvider, theme } from 'react-native-design-system';
import { NestableScrollContainer } from 'react-native-draggable-flatlist';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS, FONT, SIZES } from '../theme/theme';

import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { left } from '../assets';
import { EditGoal, ScreenHeaderBtn } from '../components';

const Edit = ({ route, navigation }) => {
  const { item } = route.params;

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
            <Text style={styles.headerTitle}>{item.goal.description}</Text>
          </View>
          <NestableScrollContainer showsVerticalScrollIndicator={false}>
            <EditGoal navigation={navigation} item={item} />
          </NestableScrollContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
export default Edit;

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
