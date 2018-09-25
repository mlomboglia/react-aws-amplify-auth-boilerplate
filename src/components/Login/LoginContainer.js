// [TODO]: Add Formik and yup validation
import "./Login.css";
import React from "react";
/////////////////////
// import { connect } from 'react-redux';
import { dispatch } from '../../store';
import Component from './Login';

export  class Container extends React.Component {

      constructor(props) {
            super(props);
            this.state = { email: "", password: ""};
      }

      validateForm() {
            return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = evt => {
            this.setState({
                  [evt.target.id]: evt.target.value
            });
      }

      handleSubmit = evt => {
            const {email, password} = this.state;
            evt.preventDefault();
            dispatch.auth.login({ email, password });
      }

      render() {
            const { email, password } = this.state;
            return <Component
                  email={email}
                  password={password}
                  formIsvalid={this.validateForm()}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
            />;
      }
}

export default Container;

