import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexGrow: 1,
  },
  title: {
    fontSize: fonts.largest,
    color: colors.regular,
    textAlign: 'center',
  },
  graph: {
    marginTop: metrics.mediumSize,
    marginBottom: metrics.mediumSize,
  },
  subTitle: {
    fontSize: fonts.large,
    color: colors.regular,
    textAlign: 'center',
  },
  content: {
    height: 320,
    borderRadius: metrics.radiusMedium,
    marginTop: metrics.size,
    padding: metrics.mediumSize,
    paddingBottom: 0,
    backgroundColor: colors.white,
  },
  actions: {
    padding: metrics.size,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  item: {
    borderWidth: 1,
    borderRadius: metrics.radius,
    borderStyle: 'solid',
    borderColor: colors.primary,
    marginBottom: metrics.mediumSize,
  },
  description: {
    fontSize: fonts.big,
    color: colors.white,
    textAlign: 'center',
  },
  answer: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  result: {
    flexDirection: 'row',
    padding: metrics.mediumSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerItem: {
    borderTopLeftRadius: metrics.radius,
    borderTopRightRadius: metrics.radius,
    padding: metrics.size,
    paddingBottom: 5,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: fonts.bigMd,
    marginRight: 10,
  },
  question: {
    margin: 10,
  },
  separator: {
    width: '100%',
    borderColor: colors.light,
    borderEndWidth: 1,
    borderStyle: 'solid',
  },
});

export const progressCircle = {
  radius: 70,
  borderWidth: 10,
  color: colors.primary,
  shadowColor: colors.primaryOpacity,
  bgColor: colors.lighter,
};

export const icons = {
  size: 30,
  like: {
    name: 'like1',
    color: colors.primary,
  },
  unlike: {
    name: 'dislike2',
    color: colors.primaryOpacity,
  },
};
