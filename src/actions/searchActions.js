import { SEARCH_CITY, FETCH_RESTAURANTS, FILTER_RESTAURANT } from './types';
import axios from 'axios';


export const searchCity = text => dispatch => {
    dispatch({
        type: SEARCH_CITY,
        payload: text
    });
};

export const fetchRestaurants = text => dispatch => {
    axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${text}`)
        .then(response =>
            dispatch({
                type: FETCH_RESTAURANTS,
                payload: response.data.restaurants
            })
        )
        .catch(err => console.log(err));

};
export const filteredRest = (restaurants, name) => dispatch => {
    return dispatch({
        type: FILTER_RESTAURANT,
        payload: {
            name: name,
            restaurants: name === "" ? restaurants : restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(name))


        }
    })

};