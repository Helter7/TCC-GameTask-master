import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: SIZES.medium,
  },
  taskName: (is_completed) => ({
    fontSize: SIZES.medium,
    fontFamily: 'DMBold',
    color: COLORS.primary,
    textDecorationLine: is_completed == 1 ? 'line-through' : 'none',
  }),
  taskType: {
    fontSize: SIZES.small + 2,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
