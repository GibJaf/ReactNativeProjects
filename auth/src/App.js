/* 
To Fix : 
Enlarge the logout button so that it can be pressed.
*/

import firebase from 'firebase';
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null};

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDiu1AC920cEpZ8Rwn-4DXUgBTxfmEYNto",
            authDomain: "auth-51ec8.firebaseapp.com",
            databaseURL: "https://auth-51ec8.firebaseio.com",
            projectId: "auth-51ec8",
            storageBucket: "auth-51ec8.appspot.com",
            messagingSenderId: "302666603582",
            appId: "1:302666603582:web:82d21dbc03eebb79a6056f",
            measurementId: "G-9CMCRRL6SM"
          });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true});
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn){
            case true: 
                return (
                <View>
                    <Button onPress={() => {
                    firebase.auth().signOut();
                    console.log("Log Out pressed");
                }}
                >Log Out</Button>
                
                </View>
                );
            case false: 
                return <LoginForm />
            default:
                return <Spinner size="large"/>;

        }
    }


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;