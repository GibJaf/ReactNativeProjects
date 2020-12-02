import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password, error } = this.state;

        this.setState({ error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />;
        }

        return(
        <Button
            onPress={this.onButtonPress.bind(this)}
        >
            Log In 
        </Button>
        );
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            error: 'SignUp Failed',
            loading: false
        })
    }

 render() {
     return(
        <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="user@email.com"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    
                />
            </CardSection>

            <CardSection>
                <Input
                    placeholder="password"
                    label="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                />
            </CardSection>

            <Text style={style.errorTextStyle}>
                {this.state.error}
            </Text>


            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
     );
 }   
}

const style={
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;