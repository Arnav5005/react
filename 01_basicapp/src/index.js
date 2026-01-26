import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // here we are storing the DOM of div with id=root from indexed.html in root variable 
root.render( // now we are rendering the root variable where we have stored the div
    <App />  // and we are calling App here (App is a function which we defined in the App.js file)
  );