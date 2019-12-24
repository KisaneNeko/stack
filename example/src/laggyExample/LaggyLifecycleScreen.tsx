import React from 'react';

import delayItemscount from './delayItemsCount';
import LoadingComponent from './LoadingComponent';

export default class LaggyLifecycleScreen extends React.Component<
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
    this.expensiveMethod();
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
