import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { left } from '../assets';
import { ScreenHeaderBtn } from '../components';
import { Streaks } from '../components/pomodoro/streaks';
import { COLORS, FONT, SIZES } from '../theme/theme';

const Pomodoro = ({ route, navigation }) => {
  const { list } = route.params;

  const [timerType, setTimerType] = useState('work');
  const [time, setTime] = useState(1500); // 25 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      if (timerType === 'work') {
        setTimerType('pause');
        setTime(300); // 5 minutes in seconds
      } else if (timerType === 'pause') {
        setTimerType('work');
        setTime(1500); // 25 minutes in seconds
      }
    }
  }, [time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ScreenHeaderBtn
          iconUrl={left}
          dimension="60%"
          handlePress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <View style={styles.timerContainer}>
          <View style={styles.headerTitleBox}>
            <Text style={styles.timerType}>
              {timerType === 'work'
                ? 'Esforço Maximo'
                : 'Tempo para o cafézinho'}
            </Text>
          </View>

          <Text style={styles.timer}>{formatTime()}</Text>
        </View>
        <Streaks navigation={navigation} list={list} />
      </View>
    </SafeAreaView>
  );
};
export default Pomodoro;

const styles = StyleSheet.create({
  headerTitleBox: {
    marginVertical: SIZES.medium,
  },
  headerTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    textAlign: 'center',
  },
  timerContainer: {
    marginVertical: SIZES.medium,
    alignItems: 'center',
  },
  timerType: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    textAlign: 'center',
  },
  timer: {
    fontSize: 48,
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
});
