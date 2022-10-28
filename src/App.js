import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
      <Authenticator>
          {({ signOut, user }) => (
              <div className="App">
                  <header>
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1>We now have Auth!</h1>
                  </header>
                  <button onClick={signOut}>サインアウト</button>
              </div>
          )}
      </Authenticator>
  );
}

export default App;
