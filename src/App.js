
import Router from './component/Router';
import React, { Component } from 'react'
import firebase from 'firebase'
import Header from './component/Header';
import UserState from "./context/UserState";



class App extends Component {
  constructor() {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  state = {
    user: null
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  render() {
    return (
      <div id="tg-wrapper">
        <UserState>
          <Header />
          <Router />
        </UserState>

      </div>
    );
  }
}

export default App;
