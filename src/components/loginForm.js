import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onSubmit() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
      <Button onPress={this.onSubmit.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
            {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);