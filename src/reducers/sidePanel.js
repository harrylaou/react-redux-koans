import { SIDE_PANEL } from '../actions'

const sidePanel = (state ,  action) => {
  switch (action.type) {
     case SIDE_PANEL:
        console.log('sidePanel reducer , state',state)
        return action.open
    default :
        return false
  }
}

export default sidePanel
