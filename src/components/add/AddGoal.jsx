import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Image, Platform, Pressable, TextInput, View } from 'react-native';
import { Box, Input, ListItem, Text } from 'react-native-design-system';
import {
  NestableDraggableFlatList,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import { Alert } from 'react-native';
import { correct, lixo } from '../../assets';
import { Goal, Task, goalService, taskService } from '../../db/';
import { formatDate } from '../../utils/formatDate';
import { ScreenHeaderBtn } from '../header/ScreenHeaderBtn';
import styles from './style';

export const AddGoal = ({ navigation }) => {
  /**
   * goal descripcion state
   */
  const [descriptionGoal, setDescriptionGoal] = useState('');
  /**
   * date states
   */
  const [deadline, setDeadline] = useState('');
  const [dateDB, setDateDB] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  /** @type {[Array<Task>, React.Dispatch<Array<Task>>]} */
  const [tasks, setTasks] = useState([]);
  const [descriptionTask, setDescriptionTask] = useState('');

  const handleSave = () => {
    !tasks.length ? Alert.alert('Insira 1 tarefa') : save();
  };

  /**
   * @description Send data colected in the page to the Local Database, to create
   * a new Goal, sending a mesage of conclusion if evething went well
   * @returns {void}
   */
  const save = async () => {
    const goalModel = new Goal({
      description: descriptionGoal,
      deadline: formatDate(dateDB),
    });

    try {
      const goalId = await goalService.insert(goalModel);

      await Promise.all(
        tasks.map((task) => {
          task.goal_id = goalId;
          taskService.insert(task);
        }),
      );
      // Alert.alert('Novo Objetivo criado');
      console.log('Novo Objetivo criado');
    } catch (err) {
      console.error(err);
      console.log('Erro na criação do Objetivo');
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  /**
   * @description Control the picker if is showing or not
   * @returns {void}
   */
  const toogleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  /**
   * @param {{type: string}} type - describe...
   * @param {Date} date - describe...
   * @returns {void}
   */
  const handlePicker = ({ type }, date) => {
    if (type == 'set') {
      setDateDB(date);
      if (Platform.OS === 'android') {
        toogleDatePicker();
        setDeadline(formatDate(date, true));
      }
    }
  };

  /**
   * @description Pick the description of a task remove blank spaces in the begining and ending,
   * generate and unique code, and add the task to the Gols's list of tasks to the new goal,
   * and finally clean the field description task
   * @returns {void}
   */
  const handleAddTask = () => {
    const description = descriptionTask.trim();
    if (!description) return;
    const code = Math.floor(Date.now() * Math.random()).toString(36);
    const newTask = new Task({
      description,
      is_completed: 0,
      code,
    });
    setTasks((prev) => prev.concat(newTask));
    setDescriptionTask('');
  };

  /**
   * @description Delete a task of the list graphcaly
   * @returns {void}
   */
  const handleDeleteTask = (code) => {
    setTasks((prevData) => prevData.filter((item) => item.code !== code));
  };

  /**
   * @description Render the item of the NestebleList
   * @returns {Component}
   */
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <ListItem
          size="lg"
          onLongPress={drag}
          onPress={() => {}}
          disabled={isActive}
          background={isActive ? 'gray300' : 'white'}
          rightIcon={
            <Pressable
              style={styles.btnContainer}
              onPress={() => handleDeleteTask(item.code)}
            >
              <Image
                source={lixo}
                resizeMode="cover"
                style={styles.btnImg('60%')}
              />
            </Pressable>
          }
        >
          {item.description}
        </ListItem>
      </ScaleDecorator>
    );
  };

  return (
    <View style={styles.container}>
      <ScreenHeaderBtn
        iconUrl={correct}
        dimension="60%"
        handlePress={handleSave}
      />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(i) => setDescriptionGoal(i)}
          value={descriptionGoal}
          placeholder="Descrição do Objetivo"
          style={styles.inputText}
        />
      </View>
      <View>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="calendar"
            value={dateDB ? dateDB : formatDate(new Date())}
            onChange={handlePicker}
            minimumDate={new Date()}
          />
        )}

        {!showPicker && (
          <Pressable onPress={toogleDatePicker} style={styles.inputContainer}>
            <TextInput
              onChange={(date) => setDeadline(formatDate(date, true))}
              value={deadline}
              placeholder="Data de termino"
              style={styles.inputText}
              editable={false}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.newTask}>
        <Text style={styles.taskTitle}>Tarefas</Text>
      </View>

      <Input
        value={descriptionTask}
        outline
        placeholder="Descrição da Tarefa"
        onChangeText={(i) => setDescriptionTask(i)}
        onSubmitEditing={handleAddTask}
      />

      {tasks && tasks.length === 0 && (
        <Box space="6xl">
          <Text>Digite para inserir uma Tarefa...</Text>
        </Box>
      )}
      <NestableDraggableFlatList
        data={tasks}
        onDragEnd={({ data }) => setTasks(data)}
        keyExtractor={(item) => item.code}
        renderItem={renderItem}
      />
    </View>
  );
};
