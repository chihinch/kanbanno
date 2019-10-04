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
    if (this.props.errors === undefined || this.props.errors.length == 0) {
      errorList = null;
    } else {
        errorList = this.props.errors.map((error, idx) => {
          return (
            <li key={`session-error-${idx}`}>
              {error}
            </li>
          );
        });
        
        return (
          <ul className="session-errors">
            {errorList}
          </ul>
        );
      }
    }

  render() {
    return (<>
      <div className="session-form-main">
        <div className="session-form-container">
          <div className="session-form-heading">
            <h1>{this.props.formHeadingText}</h1>
            {this.props.navLink}
          </div>
          <div className="session-errors-div">
            {this.renderErrors()}
          </div>
          <div className="session-form-box">
            <form onSubmit={this.handleSubmit}>
              <div className="session-form-inputs">
                {this.props.formType === "signup" ? (<>
                <label>Name</label>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="session-input"
                  placeholder="Wise Old Man" />
                </>) : null}
                
                <label>Email</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                  placeholder="wiseoldman@kanbanno.com" 
                />

                <label>Password</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                  placeholder="At least 6 characters"
                />

                <input type="submit" value={this.props.submitLabel} />
              </div>
            </form>
          </div>
          <Link to="/" className="session-form-link">Return to Homepage</Link>
        </div>
      </div>
      
      <Footer />
    </>);
  }
}

export default SessionForm;