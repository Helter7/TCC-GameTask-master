import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'auto',
    padding: SIZES.small,
    flex: 1,
    alignItems: 'center',
  },
  initBtn: {
    backgroundColor: '#FE7654',
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
  },
  initBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
