import React from 'react';
import { Button, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from './node_modules/react-navigation-stack';

import LaggyLifecycleScreen from './LaggyLifecycleScreen';
import LaggyAfterInteractions from './LaggyAfterInteractions';
import SmoothTimeout from './SmoothTimeout';

const Buttons = withNavigation((props: { navigation: NavigationStackProp }) => (
  <React.Fragment>
    <Button
      title="Show laggy lifecycle"
      onPress={() => props.navigation.push('LaggyLifecycle')}
    />
    <Button
      title="Show laggy after interactions"
      onPress={() => props.navigation.push('LaggyAfterInteractions')}
    />
    <Button
      title="Show smooth transition with timeout"
      onPress={() => props.navigation.push('SmoothTimeout')}
    />
  </React.Fragment>
));

function BasicScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text>List Screen</Text>
      <Text>A list may go here</Text>
      <Buttons />
    </View>
  );
}

BasicScreen.navigationOptions = {
  title: 'Basic',
};

export default createStackNavigator(
  {
    Basic: BasicScreen,
    LaggyLifecycle: LaggyLifecycleScreen,
    LaggyAfterInteractions: LaggyAfterInteractions,
    SmoothTimeout: SmoothTimeout,
  },
  {
    initialRouteName: 'Basic',
  }
);
