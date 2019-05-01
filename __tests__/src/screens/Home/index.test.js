import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../../../src/screens/Home';
import Button from '../../../../src/components/Button';

it('renders a Home ', () => {
  const rendered = shallow(<Home fetchQuestions={() => {}} navigation={{}} />);
  expect(rendered).toMatchSnapshot();
});

it('simulate click on button "Begin"', () => {
  const fetchQuestions = jest.fn(() => {});
  const navigator = {
    navigate: jest.fn(x => x),
  };
  const wrapper = shallow(<Home navigation={navigator} fetchQuestions={fetchQuestions} />);
  wrapper
    .find(Button)
    .first()
    .props()
    .onPress();
  expect(navigator.navigate.mock.calls[0][0]).toBe('Quiz');
  expect(navigator.navigate.mock.calls.length).toBe(1);
  expect(fetchQuestions.mock.calls.length).toBe(1);
});
