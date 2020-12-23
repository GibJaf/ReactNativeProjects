import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component{

    constructor(props){
        super(props);

        // Your web app's Firebase configuration
        var firebaseConfig;
        console.log("firebaseConfig =>",firebaseConfig);
        
        if(firebaseConfig === undefined){
            firebaseConfig = {
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

    }


    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;