import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
    padding: metrics.mediumSize,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: fonts.largest,
    marginTop: metrics.margin,
    marginBottom: metrics.margin,
    color: colors.dark,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    height: 375,
    width: '100%',
  },
  box: {
    padding: metrics.size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: 175,
    borderTopEndRadius: metrics.radius,
    borderTopLeftRadius: metrics.radius,
  },
  internalBox: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  question: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  position: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
  contentAnswer: {
    padding: metrics.size,
    flex: 1,
  },
});
