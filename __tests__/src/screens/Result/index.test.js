import React from 'react';
import { shallow } from 'enzyme/build';
import { Result } from '../../../../src/screens/Result';
import Button from '../../../../src/components/Button';
import { answers } from './mock';

let fetchQuestions;

const assert = (screen, position) => {
  const navigator = {
    navigate: jest.fn(x => x),
  };

  const wrapper = shallow(
    <Result
      answers={answers}
      navigation={navigator}
      fetchQuestions={fetchQuestions}
      percent={20}
      score={100}
    />,
  );

  wrapper
    .find(Button)
    .at(position)
    .props()
    .onPress();
  expect(navigator.navigate.mock.calls[0][0]).toBe(screen);
  expect(navigator.navigate.mock.calls.length).toBe(1);
};

beforeEach(() => {
  fetchQuestions = jest.fn(() => {});
});

it('renders a Result ', () => {
  expect(
    shallow(
      <Result
        answers={answers}
        navigation={{}}
        fetchQuestions={jest.fn(() => {})}
        percent={20}
        score={100}
      />,
    ),
  ).toMatchSnapshot();
});

it('simulate click on button "Play Again"', () => {
  assert('Quiz', 0);
  expect(fetchQuestions.mock.calls.length).toBe(1);
});

it('simulate click on button "Home"', () => {
  assert('Home', 1);
  expect(fetchQuestions.mock.calls.length).toBe(0);
});
