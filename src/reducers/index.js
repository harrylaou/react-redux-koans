import { combineReducers } from 'redux'

import beers from './beers'
import cart from './cart'
import sidePanel from './sidePanel'

const reducers = combineReducers({
  beers,
  cart,
  sidePanel
})

export default reducers
