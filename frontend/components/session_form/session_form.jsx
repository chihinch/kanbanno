import React from 'react';

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

  renderErrors() {
    const errorList = this.props.errors.map((error, idx) => {
      return (
        <li key={`session-error-${idx}`}>
          {error}
        </li>
      );
    });
    
    return(
      <ul className="session-errors">
        {errorList}
      </ul>
    );
  }

  render() {
    return (
      <div className = "session-form-container">
        <div>
          {this.renderErrors()}
        </div>
        <form onSubmit={this.handleSubmit} className="session-form-box">

          <h1 className="form-heading-text">{this.props.formHeadingText}</h1>
          {this.props.navLink}

          <div className="session-form">
            {this.props.formType === "signup" ? (<><label>Name</label>
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="session-input"
              placeholder="Wise Old Man"
            />
            <br/></>) : null}

            <label>Email</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="session-input"
              placeholder="wiseoldman@kanbanno.com" 
            />
            <br/>

            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-input"
              placeholder="At least 6 characters"
            />
            <br/>

            <input type="submit" className="session-submit" value={this.props.submitLabel} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;