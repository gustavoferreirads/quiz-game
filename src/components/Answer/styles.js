import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const borderWidth = 2;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 40,
    borderStyle: 'solid',
    borderWidth,
    borderColor: colors.lighter,
    alignItems: 'center',
    flexDirection: 'row',
    padding: metrics.size,
    marginTop: 20,
  },
  contentOption: {
    borderStyle: 'solid',
    borderRadius: 32,
    width: 32,
    height: 32,
    borderWidth,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  option: {
    fontSize: fonts.big,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.regular,
    textTransform: 'uppercase',
  },
});

export default styles;
