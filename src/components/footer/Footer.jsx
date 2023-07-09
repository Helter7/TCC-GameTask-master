import { Text, TouchableOpacity, View } from 'react-native';

import styles from './style';

export const Footer = ({ navigation, list }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.initBtn}
        onPress={() => {
          navigation.push('Pomodoro', { list: list });
        }}
      >
        <Text style={styles.initBtnText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
