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
      this.setState({
        [field]: e.currentTarget.value
      })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // componentDidMount() {
  //   if (this.props.formType === 'signup') {
  //     this.setState({ name: '' });
  //   }
  // };

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => {
          return (
            <li key={`session-error-${idx}`}>
              {error}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    let formHeadingText;
    let nameLabel;
    let nameField;
    let submitLabel;
    if (this.props.formType === 'signup') {
      formHeadingText = "Create a Kanbanno Account";
      nameLabel = <label>Name</label>;
      nameField = <input type="text" 
        value={this.state.name} 
        onChange={this.update('name')}
        className="session-input" 
        placeholder="Wise Old Man" 
      />
      submitLabel = "Create a New Account"
    } else {
      formHeadingText = "Log in to Kanbanno ";
      nameLabel = null;
      nameField = null;
      submitLabel = "Log In"
    }

    return (
      <div className = "session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h1>{formHeadingText}</h1>
          {this.props.navLink}

          <div className="session-form">
            {nameLabel}
            {nameField}
            <br/>
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
              placeholder="At least 6 characters, please"
            />
            <br/>
            <input type="submit" className="session-submit" value={submitLabel} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;