import { SafeAreaView, ScrollView } from 'react-native';

import { useEffect } from 'react';
import { View } from 'react-native';
import { lapis, left } from '../assets';
import { Footer, GoalDetail, ScreenHeaderBtn } from '../components';
import { COLORS, SIZES } from '../theme/theme';

const Details = ({ route, navigation }) => {
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ScreenHeaderBtn
          iconUrl={left}
          dimension="60%"
          handlePress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <ScreenHeaderBtn
          iconUrl={lapis}
          dimension="60%"
          handlePress={() => navigation.push('Edit', { item: item })}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
          <GoalDetail navigation={navigation} item={item} />
        </View>
      </ScrollView>
      <Footer navigation={navigation} list={[item]} />
    </SafeAreaView>
  );
};

export default Details;
