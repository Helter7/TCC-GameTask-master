import { StyleSheet } from 'react-native';
import { COLORS, FONT, SHADOWS, SIZES } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
    marginHorizontal: SIZES.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    padding: SIZES.small,
  },
  newTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: SIZES.small,
  },
  taskTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    width: '90%',
    margin: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    padding: SIZES.medium,
    borderRadius: SIZES.medium / 1.25,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
