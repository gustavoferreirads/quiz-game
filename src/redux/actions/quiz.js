import axios from 'axios';
import { createAction } from 'redux-actions';
import { ANSWER, QUESTIONS } from './index';

export function doAnswer(answer) {
  return dispatch => {
    dispatch({
      type: ANSWER,
      answer,
    });
  };
}

function get(amount = 10, difficulty = 'hard', type = 'boolean') {
  return axios.get('api.php', {
    params: {
      amount,
      difficulty,
      type,
    },
  });
}
export const fetchQuestions = createAction(QUESTIONS, get);
