import React from 'react';
import Pagetitle from './components/Pagetitle';
import Landing from './components/Landing';

import store from './store';
import { Provider } from 'react-redux';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="wrapper">
          <div className="main">
            <div className="form-container">
              <div className="row">
                
                <Provider store={store}>
                <div className="title-container">
                    <Pagetitle/>
                    <Landing/>
                </div>  
                </Provider>
                </div>
              </div>
            </div>
          </div>
  );
  }
};

export default App;
