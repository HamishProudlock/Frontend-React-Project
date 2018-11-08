import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './CreateAccount.css';
import validateInput from '../../../validation/UserSignUpValidation'

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      username: '',
      errors: {
        username: '',
        email: '',
        password: '',
        firstname: '',
      },
      isLoading: false,
    }
  };

  changeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isValid = () => {
    const {errors, isValid} = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors })
    }
    console.log(errors)

    return isValid
  };

  submitForm = (e) => {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignUpRequest(this.state).then(
        (data) => {
          this.props.click();
          console.log(data)
          this.props.addFlashMessage({
            type: 'success',
            text: data.data.message
          })
        }
      ).catch((data) => {
        console.log(data);
        let UserName = (data.response.data.error.errors.username) ?  data.response.data.error.errors.username.properties.message : '';
        let Email = (data.response.data.error.errors.email) ?  data.response.data.error.errors.email.properties.message : '';
        let FirstName = (data.response.data.error.errors.firstname) ?  data.response.data.error.errors.firstname.properties.message : '';
        this.setState({errors: {
          username: UserName,
          email: Email,
          firstname: FirstName,
        },
        isLoading: false,
      });
    });
  }
};

  render() {
   let errors = this.state.errors;

    return (
      <div className="container2">
        <h1 className="title2">Create your Fuzzel Account</h1>
        <h1 className="subheading2">By signing up I accept the <NavLink to="/termsandconditions" style={{color: '#1a73e8', textDecoration: 'none'}} activeStyle={{color: '#1a73e8', textDecoration: 'none'}} exact={true}>Terms of Use</NavLink> and I have read and understood the Privacy Policy and Cookies Policy.</h1>
        <form>
          <div className ="textbox2">
            <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.changeText} required />
          </div>
          <span>{this.state.errors.username}</span>
          <div className ="textbox2">
            <input name="firstname" type="text" placeholder="Firstname" value={this.state.firstname} onChange={this.changeText} required />
          </div>
          <span>{this.state.errors.firstname}</span>
          <div className ="textbox2">
            <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.changeText} required />
          </div>
          <span>{this.state.errors.email}</span>
          <div className ="textbox2">
            <input name="password" type="password" placeholder="Password (min 8)" value={this.state.password} onChange={this.changeText} required />
          </div>
          <span>{this.state.errors.password}</span>
          <div className ="bottomLine">
            <input className="btn2" type="button" value="Create account" disabled={this.state.isLoading} onClick={this.submitForm} />
            <h1 className="Create2" onClick={this.props.login}>Sign in</h1>
          </div>
        </form>
      </div>
    );
  };
}


export default CreateAccount;

//{ this.state.errors.username && <span>{this.state.errors.username}</span> }
