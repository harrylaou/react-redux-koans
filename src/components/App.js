import React from "react"
import SideMenu from 'react-burger-menu'

import BeerList from "./beers/List"
import Basket from "./cart/Basket"
import Checkout from "./cart/Checkout"
import Header from "./Header"
import theme from "./theme"
import {connect} from 'react-redux'
import * as actions from '../actions'
class App extends React.Component {

  constructor(props) {
    super(props)

  }

  toggleSideMenu = () => {
    console.log('toggleSideMenu',!this.props.isSideMenuOpen)
    this.props.dispatch(actions.sidePanel(!this.props.isSideMenuOpen))

  }

  render() {
    return (
      <div id="page-wrap">
        <SideMenu.slide noOverlay customCrossIcon={false} customBurgerIcon={false} isOpen={this.props.isSideMenuOpen} pageWrapId={'page-wrap'} styles={theme.sideMenu}>
          <Checkout/>
          <Basket/>
        </SideMenu.slide>
        <div className="container">
          <a className="fa-stack fa-lg" style={theme.checkoutButton} onClick={this.toggleSideMenu}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </a>
          <Header/>
          <BeerList/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state1', state)
  console.log('state.sidePanel', state.sidePanel)
  return {isSideMenuOpen: state.sidePanel}

}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
