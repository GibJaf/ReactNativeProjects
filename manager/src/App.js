import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component{

    constructor(props){
        super(props);

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDbd8YZBgQ2PGX_TYvNH2ELcfs_LWajfTA",
            authDomain: "manager-e4707.firebaseapp.com",
            projectId: "manager-e4707",
            storageBucket: "manager-e4707.appspot.com",
            messagingSenderId: "246690212087",
            appId: "1:246690212087:web:b92cad2c12d2063ab40bf2"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

    }


    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;