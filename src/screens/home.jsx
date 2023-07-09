import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { menu, plus } from '../assets';
import { Footer, Goals, ScreenHeaderBtn, goalList } from '../components';
import { goalService, taskService } from '../db';
import { COLORS, SIZES } from '../theme/theme';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [goalData, setGoalData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ScreenHeaderBtn
          iconUrl={plus}
          dimension="60%"
          handlePress={() => navigation.push('Add')}
        />
      ),
      headerLeft: () => (
        <ScreenHeaderBtn
          iconUrl={menu}
          dimension="60%"
          handlePress={() => {}}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    try {
      async function fetchGoalData() {
        const goalData = await goalService.findAll();
        const taskData = await taskService.findAll();
        // setGoalData(goalData);
        // setTaskData(taskData);
        const filterList = goalList(goalData, taskData);
        setList(filterList);
        console.log(goalData);
        setIsLoading(false);
      }
      fetchGoalData();
    } catch (erro) {
      console.error(erro);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={150} colors={{ colors: COLORS.primary }} />
        ) : (
          <Goals navigation={navigation} list={list} />
        )}
      </View>
      <Footer navigation={navigation} list={list} />
    </SafeAreaView>
  );
};
export default Home;
