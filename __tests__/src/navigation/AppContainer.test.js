import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import AppContainer from '../../../src/navigation/AppContainer';

it('renders a AppContainer ', () => {
  expect(
    shallow(
      <Provider store={configureStore()}>
        <AppContainer />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
