import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestDetail from './RestDetail';

export class Filter extends Component {
  render() {

    const { filteredRest } = this.props;

    let content = '';

        content = filteredRest.filter((restaurant, index) => 
            <RestDetail key={index} restaurant={restaurant} />
          )
          
        
    return(
        
          <div className="row">{content}</div>
        
    );
  }
}

const mapStateToProps = state => ({
    filteredRest: state.restaurants.filteredRest
    
});

export default connect(mapStateToProps)(Filter);
