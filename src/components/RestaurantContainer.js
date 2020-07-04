import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestDetail from './RestDetail';


const filterRestaurants = (restaurants, name) => {
  return restaurants.filter((res) => (res.name.toLowerCase().includes(name)))
}



export class RestaurantContainer extends Component {
  render() {

    const { restaurants, text, name ,address} = this.props;
    
    
    console.log(text)
    console.log(address)
    let filtered = filterRestaurants(restaurants, name,address)
    console.log(filtered)

    let content = '';

        content = filtered.map((restaurant, index) => 
            <RestDetail key={index} restaurant={restaurant} />
          )
        
    return(
        
          <div className="restdata">{content}</div>
        
    );
  }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants,
    text: state.restaurants.text,
    name: state.restaurants.name,
    address:state.restaurants.address
});

export default connect(mapStateToProps)(RestaurantContainer);