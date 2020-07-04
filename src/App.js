import React from 'react';
import Pagetitle from './components/Pagetitle';
import SearchForm from './components/SearchForm';
import RestaurantContainer from './components/RestaurantContainer';

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  render(){
  return (
    <div className="wrapper">
        <div className="imgclass">
            <Provider store={store}>
               
                 <Pagetitle/>
                
                 <SearchForm />
                 
                 <RestaurantContainer />
              
            </Provider>
        </div>
             
      </div>
          
  );
  }
};

export default App;
