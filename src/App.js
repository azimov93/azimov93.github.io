import React, { Component } from 'react';
import UserBar from './components/UserBar';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
        <div className="container">
            <UserBar />
            {this.props.children}
        </div>
    );
  }
}

export default App;
