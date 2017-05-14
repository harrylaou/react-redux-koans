import {ADD_BEER_TO_CART,REMOVE_BEER_FROM_CART} from '../actions'

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_BEER_TO_CART:
      return [
        ...state,
        action.beer
      ]
    case REMOVE_BEER_FROM_CART:
      return state.filter(beer => action.beer.id != beer.id)
    default:
      return state
  }
}

export default cart
