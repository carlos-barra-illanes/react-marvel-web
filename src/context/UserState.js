import React, { useState } from "react";
import UserContext from "./UserContext";



import firebase from 'firebase'

const UserState = (props) => {

   const [user  , setUser ] = useState(''); 


  const handleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result =>{
        setUser(result.user);
        console.log(`${result.user.email} ha iniciado sesión`);
      }
         
         )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  };

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(result =>{
        setUser(null);
        console.log('Te has desconectado correctamente');
    } )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  };

  const handleStateChanged = () => {
    firebase.auth().onAuthStateChanged(user => {
        this.setState({ user })
      })
  }



  return (
    <UserContext.Provider
      value={{
        user: user,
        handleAuth,
        handleLogout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;