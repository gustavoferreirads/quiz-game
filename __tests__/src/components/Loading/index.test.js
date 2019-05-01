import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { withLoading } from '../../../../src/components/Loading';

describe('Loading HOC', () => {
  it('renders a internal Component', () => {
    const mockStore = configureStore({ Quiz: { questions: [{ id: 1 }] } });
    const Child = withLoading(View);
    const rendered = shallow(
      <Provider store={mockStore}>
        <Child />
      </Provider>,
    );
    expect(rendered).toMatchSnapshot();
  });

  it('renders a Loading ', () => {
    const mockStore = configureStore({ Quiz: { questions: [] } });
    const Child = withLoading(View);
    expect(
      shallow(
        <Provider store={mockStore}>
          <Child />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
