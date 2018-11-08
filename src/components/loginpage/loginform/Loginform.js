import React, {Component} from 'react';

import './Loginform.css';

 class Loginform extends Component {
   constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: ''
     };
   }

   changeText = (e) => {
     this.setState({ [e.target.name]: e.target.value });
   };

   submitForm = (e) => {
     e.preventDefault();
     console.log(this.state);
   };

   render(){
     return (
       <div className="container">
        <h1 className="title">Sign in</h1>
        <h1 className="subheading">to your Fuzzel Account</h1>
        <div className ="textbox">
          <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.changeText} required />
        </div>
        <div className ="textbox">
          <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.changeText} required />
        </div>
        <input className="btn" type="button" value="Sign In" onClick={this.submitForm} />
        <h1 className="Forgot" onClick={this.props.forgot} >Forgot Password?</h1>
        <h1 className="Create" onClick={this.props.create} >Create account</h1>
      </div>
    );
  }
};

export default Loginform;
