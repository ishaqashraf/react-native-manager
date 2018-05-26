import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Routes from './src/routes';

class App extends Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCW3wvi7bb8IdcRMqGdUr8i6N2my1KJKoM",
      authDomain: "manager-45951.firebaseapp.com",
      databaseURL: "https://manager-45951.firebaseio.com",
      projectId: "manager-45951",
      storageBucket: "",
      messagingSenderId: "16955674108"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
       <Routes/>
      </Provider>
    );
  }
}

export default App;

