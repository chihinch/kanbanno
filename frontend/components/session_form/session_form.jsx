import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../footer/footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  renderErrors() {
    let errorList;
    let errorsClass;
    if (this.props.errors === undefined || this.props.errors.length == 0) {
      errorList = null;
      errorsClass = "no-errors"
    } else {
        errorsClass = "errors"
        errorList = this.props.errors.map((error, idx) => {
          return (
            <span key={`session-error-${idx}`}>
              {error}
            </span>
          );
        });
        
        return (
          <div className={errorsClass}>
            {errorList}
          </div>
        );
      }
    }

  render() {
    const formType = this.props.formType;
    let formHeader;
    let navLink;
    let passwordPlaceholder;
    let submitLabel;

    if (formType === "login") {
      formHeader = "Log in to Kanbanno";
      navLink = <Link to="/signup" className="session-form-link">or create an account</Link>;
      passwordPlaceholder = "••••••••••••";
      submitLabel = "Log In";
    } else {
      formHeader = "Create a Kanbanno Account";
      navLink = <Link to="/login" className="session-form-link">or sign in to your account</Link>;
      passwordPlaceholder = "At least 6 characters"
      submitLabel = "Create New Account";
    }

    return (<>
      <section className="session-form-section">
        <div className="session-form-container">
          {this.renderErrors()}
          <div className="session-form-content">
            <h1>{formHeader}</h1>
            <div id="session-form-link-div">
              {navLink}
            </div>
            <div className="session-form-box">
              <form onSubmit={this.handleSubmit}>
                <div className="session-form-inputs">
                  {formType === "signup" ? (<>
                  <label>Name</label>
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="session-input"
                    placeholder="King Black Dragon" />
                  </>) : null}
                  
                  <label>Email</label>
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input"
                    placeholder="kbd@kanbanno.com" 
                  />

                  <label>Password</label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                    placeholder={passwordPlaceholder}
                  />

                  <input type="submit" value={submitLabel} />
                </div>
              </form>
            </div>
            <Link to="/" className="session-form-link">Return to Homepage</Link>
          </div>
        </div>
      </section>
      <Footer demoLogin={this.props.demoLogin} />
    </>);
  }
}

export default SessionForm;