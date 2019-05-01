import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from '../../../../src/screens/Quiz';
import Answer from '../../../../src/components/Answer';
import { mock } from './mock';

let doAnswer;
let navigator;

const assert = (answer, position, size = 10) => {
  const wrapper = shallow(
    <Quiz navigation={navigator} current={mock} doAnswer={doAnswer} size={size} />,
  );
  wrapper
    .find(Answer)
    .at(position)
    .props()
    .onPress();
  expect(doAnswer.mock.calls.length).toBe(1);
  expect(doAnswer.mock.calls[0][0]).toBe(answer);
};

beforeEach(() => {
  doAnswer = jest.fn(() => {});
  navigator = {
    navigate: jest.fn(x => x),
  };
});

it('renders a Quiz ', () => {
  expect(
    shallow(<Quiz doAnswer={() => jest.fn} current={mock} navigation={{}} size={10} />),
  ).toMatchSnapshot();
});

it('simulate click on button "True"', () => {
  assert('True', 0);
});

it('simulate click on button "False" and go Result', () => {
  assert('False', 1, 1);
  expect(navigator.navigate.mock.calls[0][0]).toBe('Results');
  expect(navigator.navigate.mock.calls.length).toBe(1);
});
