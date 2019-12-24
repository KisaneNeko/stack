import React from 'react';
import { InteractionManager } from 'react-native';

import delayItemscount from './delayItemsCount';
import LoadingComponent from './LoadingComponent';

export default class LaggyAfterInteractions extends React.Component<
  any,
  { isLoading: boolean }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.expensiveMethod();
    });
  }

  expensiveMethod() {
    console.log('starting expensive action');
    const arr = new Array(delayItemscount);
    arr.fill('foo').forEach((s, i) => console.log(s + i));
    this.setState({ isLoading: false });
  }

  render() {
    return <LoadingComponent isLoading={this.state.isLoading} />;
  }
}
