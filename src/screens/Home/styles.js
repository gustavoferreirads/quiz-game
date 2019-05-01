import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.bigger,
    textAlign: 'center',
  },
  boxTitle: {
    justifyContent: 'center',
    flex: 1,
  },
  box: {
    flexGrow: 1,
  },

  internalText: {
    color: colors.dark,
    fontSize: fonts.large,
    textAlign: 'center',
  },
  bolder: {
    fontWeight: 'bold',
  },
  grow: {
    flexGrow: 1,
  },
});
