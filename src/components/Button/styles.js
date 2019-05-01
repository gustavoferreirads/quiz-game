import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    width: 150,
  },

  'button-inline': {
    backgroundColor: colors.primary,
  },

  'button-outline': {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  text: {
    fontSize: fonts.big,
  },
  'text-inline': {
    color: '#FFF',
  },
  'text-outline': {
    color: colors.primary,
  },
});

export default styles;
