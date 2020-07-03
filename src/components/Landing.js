import React, { Component } from 'react';
import SearchForm from './SearchForm';
import RestaurantContainer from './RestaurantContainer';



import { connect } from 'react-redux';

export class Landing extends Component {
  render() {
    
    return (
      <div className="container">
        <SearchForm />
        <RestaurantContainer />
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.restaurants.loading
});

export default connect(mapStateToProps)(Landing);