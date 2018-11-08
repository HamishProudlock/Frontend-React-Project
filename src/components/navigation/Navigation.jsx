import React, {Component} from 'react';

import Navigationbar from './navigationbar/Navigationbar'
import Sidebar from './sidebar/Sidebar'
import Backdrop from '../backdrop/Backdrop'
import Loginpage from '../loginpage/Loginpage'


class Navigation extends Component {

  state = {
    sidebarOpen: false,
    Loginformpresent: false
  };

  loginFormClickHandler = () => {
    this.setState((prevState) => {
      return {Loginformpresent: !prevState.Loginformpresent};
    });
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
  };

  LoginbackdropClickHandler = () => {
    this.setState({Loginformpresent: false});
  };

  render() {
    let backdrop;
    let loginpage;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    else if (this.state.Loginformpresent){
      backdrop = <Backdrop click={this.LoginbackdropClickHandler} />
      loginpage = <Loginpage click={this.LoginbackdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Navigationbar drawerClickHandler={this.drawerToggleClickHandler} loginClickHandler= {this.loginFormClickHandler} />
        <Sidebar show={this.state.sidebarOpen} click={this.backdropClickHandler} />
        {backdrop}
        {loginpage}
      </div>
    )
  }
}

export default Navigation
