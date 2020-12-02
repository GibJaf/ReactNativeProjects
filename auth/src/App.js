import firebase from 'firebase';
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

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
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm/>
            </View>
        );
    }
}

export default App;