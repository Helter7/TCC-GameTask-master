import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

// import { insertionSort } from '../../utils/sort';
import { lixo } from '../../assets';
import { goalService } from '../../db';
import { COLORS } from '../../theme/theme';
import { TaskCard } from '../cards/task/TaskCard';
import { ScreenHeaderBtn } from '../header/ScreenHeaderBtn';
import { percentage } from './percentage';
import styles from './style';

export const GoalDetail = ({ navigation, item }) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteGoal = async () => {
    try {
      const del = await goalService.deleteById(item.goal.id);

      if (!del) {
        setIsLoading(true);
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={100} colors={{ colors: COLORS.primary }} />
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.headerTitleBox}>
              <Text style={styles.headerTitle}>{item.goal.description}</Text>
            </View>
            <View style={styles.percentageInfoBox}>
              <Text style={styles.percentage}>
                {percentage(item.tasks) + '%'}
              </Text>
              <ScreenHeaderBtn
                iconUrl={lixo}
                dimension="60%"
                handlePress={deleteGoal}
              />
            </View>
          </View>
          <View style={styles.cardsContainer}>
            {item.tasks?.map((task) => (
              <TaskCard data={task} key={task.code} />
            ))}
          </View>
        </>
      )}
    </>
  );
};
