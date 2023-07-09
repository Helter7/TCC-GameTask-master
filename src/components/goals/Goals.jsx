import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SIZES } from '../../theme/theme';
import { GoalsCard } from '../cards/goals/GoalsCard';
import styles from './style';

export const Goals = ({ navigation, list }) => {
  const handleCardPress = (item) => {
    navigation.push(`Details`, { item: item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {!Array.isArray(list) ? (
          <Text>Algo deu errado</Text>
        ) : !list.length ? (
          <Text>Precione o icone '+' para adicionar um objetivo</Text>
        ) : (
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <GoalsCard item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item) => item.goal.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal={false}
            numColumns={1}
          />
        )}
      </View>
    </View>
  );
};
