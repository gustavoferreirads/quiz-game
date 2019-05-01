import { AllHtmlEntities } from 'html-entities';
import { ANSWER, QUESTIONS } from '../actions';

const initialState = {
  questions: [],
  size: 0,
  current: { index: -1, wrapQuestion: {} },
  answers: [],
  score: 0,
  percent: 0,
};

const generateResult = state => {
  const { questions } = state;
  let score = 0;
  const answers = questions.map((question, index) => {
    const isCorrect = state.answers[index] === question.correct_answer;
    score = isCorrect ? score + 1 : score;
    return { ...question, isCorrect };
  });
  const percent = (score / answers.length) * 100;
  return { ...initialState, score, answers, percent };
};

const nextQuestion = state => {
  const { current, questions } = state;

  const index = current.index + 1;

  if (index < questions.length) {
    const wrapQuestion = questions[index];

    return {
      ...state,
      current: { index, wrapQuestion, position: index + 1 },
    };
  }

  return generateResult(state);
};

const reducer = (state = initialState, action) => {
  if (action.type === QUESTIONS) {
    const { payload } = action;
    const questions = payload.data.results.map(q => ({
      ...q,
      question: new AllHtmlEntities().decode(q.question),
    }));
    const newState = { ...initialState, questions, size: questions.length };
    return nextQuestion(newState);
  }

  if (action.type === ANSWER) {
    const { answers } = state;

    answers.push(action.answer);

    return nextQuestion({
      ...state,
      answers,
    });
  }

  return state;
};

export default reducer;
