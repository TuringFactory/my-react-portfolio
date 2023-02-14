import IntroPanel from './components/intropanel';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {  } 
  render() { 
    return (
    <React.Fragment>
    <IntroPanel id="intro"></IntroPanel>
    </React.Fragment>
   );
  }
}
 

export default App;
