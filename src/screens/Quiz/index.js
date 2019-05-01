import React from 'react';
import * as PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Container from '../../components/Container';
import * as actions from '../../redux/actions/quiz';
import { withLoading } from '../../components/Loading';
import styles from './styles';
import Answer from '../../components/Answer';

const TRUE = 'True';
const FALSE = 'False';

export const Quiz = ({ navigation, current, size, doAnswer }) => {
  const { position, wrapQuestion } = current;

  const onAnswer = answer => {
    doAnswer(answer);
    if (position === size) {
      navigation.navigate('Results');
    }
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>{wrapQuestion.category}</Text>
      <View style={styles.content}>
        <View style={styles.box}>
          <View style={styles.internalBox}>
            <Text style={styles.question}>{wrapQuestion.question}</Text>
          </View>
          <Text style={styles.position}>
            {position} of {size}
          </Text>
        </View>
        <View style={styles.contentAnswer}>
          <Answer option="A" text="True" onPress={() => onAnswer(TRUE)} />
          <Answer option="B" text="False" onPress={() => onAnswer(FALSE)} />
        </View>
      </View>
    </Container>
  );
};

Quiz.defaultProps = {
  current: {},
  navigation: {},
  size: 0,
};

Quiz.propTypes = {
  navigation: PropTypes.object,
  doAnswer: PropTypes.func.isRequired,
  current: PropTypes.object,
  size: PropTypes.number,
};

export default withLoading(
  connect(
    store => ({
      current: store.Quiz.current,
      size: store.Quiz.size,
    }),
    dispatch => bindActionCreators(actions, dispatch),
  )(Quiz),
);
