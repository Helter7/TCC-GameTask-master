import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleBox: {
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    textAlign: 'center',
  },
  percentageInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentage: {
    fontSize: SIZES.large,
    color: COLORS.gray,
    fontFamily: FONT.medium,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
