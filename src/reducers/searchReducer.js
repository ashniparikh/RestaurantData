import { SEARCH_CITY, FETCH_RESTAURANTS, FILTER_RESTAURANT } from '../actions/types';

const initialState = {
    text: '',
    restaurants: [],
    filteredRest: [],
    name: '',

};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_CITY:
            return {
                ...state,
                text: action.payload,

            };
        case FETCH_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload,
                filteredRest: action.payload,
            };
        case FILTER_RESTAURANT:

            const name = action.payload;
            const filteredRest = state.restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(name.name));
            console.log(filteredRest);
            return {
                ...state,
                filteredRest: action.payload.restaurants,
                name: action.payload.name



            };

        default:
            return state;
    }
};