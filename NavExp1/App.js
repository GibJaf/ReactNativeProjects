import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

const navigator = createStackNavigator({
  Screen1: Screen1,
  Screen2: Screen2
},
{
  initialRouteName: 'Screen1',
  defaultNavigationOptions: {
    title: 'Gibraan App'
  }
}
);

export default createAppContainer(navigator);