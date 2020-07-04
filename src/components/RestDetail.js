import React, { Component } from 'react';


export class RestDetail extends Component {
  render() {
    const { restaurant } = this.props;
    return (
        <div className="searchContainer ">
        
        <div className="rest_info "> 
                        <p className="rest-key"><strong>Restaurant Name:</strong>
                        <span className="rest-value"> {restaurant.name}</span>
                        </p>
                    
                    
                        <p className="rest-key"><strong>Address:</strong>
                        <span className="rest-value"> {restaurant.address}</span>
                        </p>

                        <p className="rest-key"><strong>Area: </strong>
                        <span className="rest-value"> {restaurant.area}</span>
                        </p>
                    
                        <p className="rest-key"><strong>Price: </strong>
                        <span className="rest-value"> {restaurant.price}</span>
                        </p>
        </div>
        </div>
      
    );
  }
}

export default RestDetail;