import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeConnected from '../screens/Home';
import QuizConnected from '../screens/Quiz';
import ResultConnected from '../screens/Result';

import { headerStyle } from './styles';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeConnected,
      navigationOptions: () => ({
        title: 'Quiz Game',
        ...headerStyle,
      }),
    },
    Quiz: {
      screen: QuizConnected,
      navigationOptions: () => ({
        title: 'Questions',
        ...headerStyle,
      }),
    },
    Results: {
      screen: ResultConnected,
      navigationOptions: () => ({
        title: 'Result',
        ...headerStyle,
        headerLeft: null,
        gesturesEnabled: false,
      }),
    },
  },
  {},
);

const AppSwitchNavigator = createSwitchNavigator({
  App: AppStack,
});

export default createAppContainer(AppSwitchNavigator);
