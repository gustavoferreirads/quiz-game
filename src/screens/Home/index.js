import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View } from 'react-native';
import * as actions from '../../redux/actions/quiz';
import Container from '../../components/Container';
import Button from '../../components/Button';

import styles from './styles';

export const Home = ({ navigation, fetchQuestions }) => {
  const navigateBegin = () => {
    fetchQuestions();
    navigation.navigate('Quiz');
  };

  return (
    <Container style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Welcome to the</Text>
        <Text style={styles.title}>Trivia Challenge!</Text>
      </View>
      <View style={styles.grow}>
        <Text style={styles.internalText}>
          You will be presented with 10 True or False questions.
        </Text>
      </View>
      <View style={styles.grow}>
        <Text style={[styles.internalText, styles.bolder]}>Can you score 100%?</Text>
      </View>
      <View style={styles.grow}>
        <Button onPress={navigateBegin}>
          <Text>BEGIN</Text>
        </Button>
      </View>
    </Container>
  );
};

Home.defaultProps = {
  navigation: {},
};

Home.propTypes = {
  navigation: PropTypes.object,
  fetchQuestions: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  dispatch => bindActionCreators(actions, dispatch),
)(Home);
