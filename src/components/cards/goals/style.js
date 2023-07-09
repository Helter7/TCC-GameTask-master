import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../theme/theme';

const styles = StyleSheet.create({
  container: (prostect) => ({
    width: '99%',
    padding: SIZES.small,
    margin: SIZES.xxSmall,
    backgroundColor: prostect == 100 ? COLORS.gold : COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignContent: 'center',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  task: (prostect) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: prostect == 100 ? COLORS.gray : '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  }),
  infoContainer: {
    marginTop: SIZES.large,
  },
  goalName: (prostect) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: prostect == 100 ? 'black' : COLORS.white,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
