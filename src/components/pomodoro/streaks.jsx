import { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

import { correctWhite } from '../../assets';
import { taskService } from '../../db';
import styles from './style';

export const Streaks = ({ navigation, list }) => {
  const [actual, setActual] = useState(undefined);
  const [currentGoal, setCurrentGoal] = useState(undefined);
  const [streak, setStreaks] = useState(0);

  useEffect(() => {
    if (streak) {
      Alert.alert('Parabens você concluiu ' + streak + ' objetivo');
    }
  }, [streak]);

  const getNextPendingTask = (goal) => {
    if ((goal || currentGoal)?.tasks?.length) {
      const currentTask = (goal || currentGoal).tasks.shift();
      if (currentTask.is_completed) {
        return getNextPendingTask(goal);
      }
      setCurrentGoal(goal || currentGoal);
      setActual(currentTask);
      return true;
    }

    if (currentGoal) {
      setStreaks((prev) => prev + 1);
    }

    if (list?.length) {
      const currentGoal = list.shift();
      getNextPendingTask(currentGoal);
      return true;
    }

    return false;
  };

  const doneButton = async () => {
    list = list.filter(({ tasks }) => {
      return tasks.some(({ is_completed }) => !is_completed);
    });
    const hasPeddingtask = getNextPendingTask();

    (async () => {
      try {
        if (actual) {
          await taskService.toogleCompleted(actual);
        }
        if (hasPeddingtask) {
          return;
        }
      } catch (err) {
        console.error(err);
      }
      Alert.alert('Todos objetivos Concluidos \b\b\b   Você e uma lenda');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    })();
  };

  useEffect(() => doneButton(), []);

  return !actual ? (
    <Text>carregando</Text>
  ) : (
    <>
      <View style={styles.container}>
        <View style={styles.motivacionBox}>
          <Text style={styles.motivacionTitle}>Just Do it</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.textTitle}>Objetivo:</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.textDescription}>
            {currentGoal.goal.description}
          </Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.textTitle}>Tarefa:</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.textDescription}>{actual.description}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.initBtn}
        onPress={() => {
          doneButton();
        }}
      >
        <Text style={styles.initBtnText}>Concluir Tarefa</Text>
        <View style={styles.imageContainer}>
          <Image source={correctWhite} style={styles.imageBtn('120%')} />
        </View>
      </TouchableOpacity>
    </>
  );
};
