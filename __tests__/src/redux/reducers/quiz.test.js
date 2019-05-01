import quiz from '../../../../src/redux/reducers/quiz';
import initialState from './initial';
import questionsAction from './questions';
import answerAction from './answer';

it('should find questions and define current question', () => {
  expect(quiz(initialState, questionsAction)).toMatchSnapshot();
});

it('should do answer', () => {
  const state = quiz(initialState, questionsAction);
  expect(quiz(state, answerAction)).toMatchSnapshot();
});

it('should do final answer and generate result', () => {
  let state = quiz(initialState, questionsAction);
  state = quiz(state, answerAction);
  expect(quiz(state, answerAction)).toMatchSnapshot();
});
