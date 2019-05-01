import React, { Fragment } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList, Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { AntDesign } from '@expo/vector-icons/build/Icons';
import Button from '../../components/Button';
import Container from '../../components/Container';
import * as actions from '../../redux/actions/quiz';
import { icons, progressCircle, styles } from './styles';

const { radius, borderWidth, color, shadowColor, bgColor } = progressCircle;

export const Result = ({ navigation, fetchQuestions, answers, score, percent }) => {
  const navigateBegin = () => {
    navigation.navigate('Home');
  };

  const navigateQuiz = () => {
    fetchQuestions();
    navigation.navigate('Quiz');
  };

  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>You scored</Text>

        <View style={styles.graph}>
          <ProgressCircle
            percent={percent}
            radius={radius}
            borderWidth={borderWidth}
            color={color}
            shadowColor={shadowColor}
            bgColor={bgColor}
          >
            <Text style={styles.title}>
              {score}/{answers.length}
            </Text>
          </ProgressCircle>
        </View>

        <Text style={styles.subTitle}>You got {percent}% of the answers correct</Text>
        <Text style={styles.subTitle}>Congratulations!</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={answers}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.headerItem}>
                <Text style={styles.description}>{item.question}</Text>
                <Text style={[styles.description, styles.answer]}>{item.correct_answer}</Text>
              </View>

              <View style={styles.result}>
                {item.isCorrect && (
                  <Fragment>
                    <Text style={styles.text}>You're right!</Text>
                    <AntDesign name={icons.like.name} size={icons.size} color={icons.like.color} />
                  </Fragment>
                )}

                {!item.isCorrect && (
                  <Fragment>
                    <Text style={styles.text}>You missed!</Text>
                    <AntDesign
                      name={icons.unlike.name}
                      size={icons.size}
                      color={icons.unlike.color}
                    />
                  </Fragment>
                )}
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.actions}>
        <Button onPress={navigateQuiz}>
          <Text>PLAY AGAIN?</Text>
        </Button>

        <Button type="outline" onPress={navigateBegin}>
          <Text>HOME</Text>
        </Button>
      </View>
    </Container>
  );
};

Result.defaultProps = {
  answers: [],
  navigation: {},
  score: 0,
  percent: 0,
};

Result.propTypes = {
  navigation: PropTypes.object,
  answers: PropTypes.arrayOf(PropTypes.object),
  fetchQuestions: PropTypes.func.isRequired,
  score: PropTypes.number,
  percent: PropTypes.number,
};

export default connect(
  ({ Quiz }) => ({
    answers: Quiz.answers,
    score: Quiz.score,
    percent: Quiz.percent,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(Result);
