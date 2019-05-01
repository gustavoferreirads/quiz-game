import React from 'react';
import { shallow } from 'enzyme/build';
import Answer from '../../../../src/components/Answer';

it('renders a Answer ', () => {
  expect(shallow(<Answer text="YES" option="A" onPress={() => jest.fn} />)).toMatchSnapshot();
});
