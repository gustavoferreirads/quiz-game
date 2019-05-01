import mockAxios from 'axios';
import mockStore from 'redux-mock-store';
import { fetchQuestions, doAnswer } from '../../../../src/redux/actions/quiz';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('fetch questions', async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { results: [{ id: 1, question: 'question' }] },
    }),
  );
  await store.dispatch(fetchQuestions());
  expect(store.getActions()).toMatchSnapshot();
});

it('do answer', () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { results: [{ id: 1, question: 'question' }] },
    }),
  );
  store.dispatch(doAnswer('True'));
  expect(store.getActions()).toMatchSnapshot();
});
