import { RECEIVE_BEERS, ADD_BEER_TO_CART ,REMOVE_BEER_FROM_CART} from '../actions'

/*
reducers should do 3 things:
    1. Set the default state
    2. Handle an action by checking the type and return a new state WITHOUT mutating the state
    3. Return the default state if no action is handled
*/

const beers = (state = [],  action) => {
  switch (action.type) {
     case ADD_BEER_TO_CART:
        return state.filter(beer=>action.beer.id!=beer.id)
    case REMOVE_BEER_FROM_CART:
        return [action.beer,...state]
    case RECEIVE_BEERS:
      return [...state,...action.beers]
    default :
        return state
  }
}

export default beers
