import React, { Component, Fragment } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import HeaderContainer from './containers/HeaderContainer';

export interface IAppProps { }

export interface IAppState {
  showCreateChallengeForm: boolean;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showCreateChallengeForm: false,
    };
  }

  private onClickCreateChallenge(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    this.setState({
      showCreateChallengeForm: true,
    });
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <MainContainer test={true} />
      </Fragment>
    );
  }
}

export default App;
