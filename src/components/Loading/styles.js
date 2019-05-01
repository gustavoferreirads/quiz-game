import { StyleSheet } from 'react-native';
import metrics from '../../styles/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: metrics.size,
  },
});
