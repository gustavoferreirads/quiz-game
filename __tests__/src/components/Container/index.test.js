import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme/build';
import Container from '../../../../src/components/Container';

it('renders a Container ', () => {
  expect(
    shallow(
      <Container style={{ backgroundColor: 'red' }}>
        <Text>Label</Text>
      </Container>,
    ),
  ).toMatchSnapshot();
});
