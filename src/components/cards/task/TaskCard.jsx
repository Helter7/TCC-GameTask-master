import { Text, View } from 'react-native';

import { Image } from 'react-native';
import { correctGreen } from '../../../assets';
import styles from './style';

export const TaskCard = ({ data }) => {
  return (
    <View style={styles.container} onPress={{}}>
      <View style={styles.textContainer}>
        <Text style={styles.taskName(data.is_completed)} numberOfLines={1}>
          {data.description}
        </Text>
      </View>
      {data.is_completed == 1 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={correctGreen}
            resizeMode="contain"
            style={styles.btnImg('150%')}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
