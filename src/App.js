import MyNavbar from './components/navbar';
import IntroPanel from './components/intropanel';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {  } 
  render() { 
    return (
    <React.Fragment>
    <MyNavbar></MyNavbar>
    <IntroPanel></IntroPanel>
    </React.Fragment>
   );
  }
}
 

export default App;
