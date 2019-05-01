import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Button from '../../../../src/components/Button';

it('renders a Button ', () => {
  expect(
    shallow(
      <Button onPress={jest.fn} style={{ backgroundColor: 'red' }}>
        <Text>Label</Text>
      </Button>,
    ),
  ).toMatchSnapshot();
});

it('renders a Button with style "inline"', () => {
  expect(shallow(<Button type="inline" />)).toMatchSnapshot();
});

it('renders a Button with style "outline"', () => {
  expect(shallow(<Button type="inline" />)).toMatchSnapshot();
});

it('renders a Button with style nonexistent ', () => {
  expect(shallow(<Button type="quizStyle" />)).toMatchSnapshot();
});
