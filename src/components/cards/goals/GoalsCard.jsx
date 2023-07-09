import { Text, TouchableOpacity, View } from 'react-native';

import { percentage } from '../../details/percentage';
import styles from './style';

export const GoalsCard = ({ item, handleCardPress }) => {
  const prospect = percentage(item.tasks);

  return (
    <TouchableOpacity
      style={styles.container(prospect)}
      onPress={() => handleCardPress(item)}
    >
      {/* display of goal and first task */}
      <View style={styles.infoContainer}>
        <Text style={styles.goalName(prospect)} numberOfLines={1}>
          {item.goal.description}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.task(prospect)} numberOfLines={1}>
          {prospect + '%'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
