import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    borderTopWidth: 2,
    borderTopColor: COLORS.gray,
  },
  motivacionBox: {
    marginTop: SIZES.xxLarge,
    marginBottom: SIZES.small,
    alignItems: 'center',
  },
  motivacionTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.tertiary,
  },
  textBox: {
    margin: SIZES.small,
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  contentBox: {
    marginHorizontal: SIZES.small,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  textDescription: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  initBtn: {
    marginVertical: SIZES.xxLarge,
    marginHorizontal: SIZES.medium,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  initBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
  imageContainer: {
    marginLeft: SIZES.small,
    width: SIZES.large,
    height: SIZES.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBtn: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
