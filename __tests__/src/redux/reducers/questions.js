import { QUESTIONS } from '../../../../src/redux/actions';

const action = {
  type: QUESTIONS,
  payload: {
    data: {
      results: [
        {
          category: 'Entertainment: Film',
          type: 'boolean',
          difficulty: 'hard',
          question:
            '&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.',
          correct_answer: 'False',
          incorrect_answers: ['True'],
        },
        {
          category: 'General Knowledge',
          type: 'boolean',
          difficulty: 'hard',
          question: 'In Scandinavian languages, the letter &Aring; means river.',
          correct_answer: 'True',
          incorrect_answers: ['False'],
        },
      ],
    },
  },
};

export default action;
