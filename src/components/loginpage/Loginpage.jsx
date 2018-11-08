import React, {Component} from 'react';
import { connect } from 'react-redux';

import { userSignUpRequest } from '../.././actions/loginPageActions';
import { addFlashMessage } from '../.././actions/flashMessages';

import Loginform from './loginform/Loginform';
import CreateAccount from './createAccount/CreateAccount';
import ForgotPassword from './forgotPassword/ForgotPassword';


class Loginpage extends Component {

  state = {
    page: 1
  };

  signInClickHandler = () => {
    this.setState({page: 1});
  };

  createAccountClickHandler = () => {
    this.setState({page: 2});
  };

  forgotPasswordClickHandler = () => {
    this.setState({page: 3});
  };

  render () {
    let loginform;
    let createAccount;
    let forgotPassword;

    const { userSignUpRequest, addFlashMessage } = this.props;

    switch(this.state.page) {
      case 2: createAccount = <CreateAccount login={this.signInClickHandler} userSignUpRequest={userSignUpRequest} click={this.props.click} addFlashMessage={ addFlashMessage }/>
      break;
      case 3: forgotPassword = <ForgotPassword login={this.signInClickHandler} />
      break;
      default: loginform = <Loginform forgot={this.forgotPasswordClickHandler} create={this.createAccountClickHandler} />
    }

    return (
      <div>
        {createAccount}
        {forgotPassword}
        {loginform}
      </div>
    )
  }
}

export default connect(null, { userSignUpRequest, addFlashMessage })(Loginpage)
