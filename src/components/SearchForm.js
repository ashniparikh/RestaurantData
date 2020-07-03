import React, { Component } from 'react';
import {searchCity, fetchRestaurants,filteredRest} from '../actions/searchActions';

import { connect } from 'react-redux';


export class SearchForm extends Component {

    onChange = e => {
      this.props.searchCity(e.target.value);
      
    };

    onSubmit = e => {
    e.preventDefault();
    this.props.fetchRestaurants(this.props.text);
    
    }
    

    render() {
      return (
        <div>
          <div className="container">
          <div className="col-md-4">{`${this.props.filteredRest.length} products found.`}</div> 
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Enter City..."
                onChange={this.onChange}
              />
              <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Refine by..."
              value={this.props.name}
              onChange={(e)=>this.props.filteredRest(this.props.restaurants,e.target.value)}
            />
              
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    text: state.restaurants.text,
    restaurants:state.restaurants.items,
    name: state.restaurants.name,
    restaurants:state.restaurants.filteredRest,
  });

  export default connect(mapStateToProps,{searchCity,fetchRestaurants,filteredRest})(SearchForm);