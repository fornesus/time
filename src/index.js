import React from 'react';  // Import from React
import ReactDOM from 'react-dom'; // Import from the React DOM
import './index.css'; // The main stylesheet
import App from './App';  // Import the main App component
import Footer from './Footer';  // Import the Footer component
// import * as serviceWorker from './serviceWorker';

// Render the main App class React application component as a child element of the <div id="#root"> HTML element:
ReactDOM.render(<App />, document.getElementById('root'));

// Render the footer Footer class React application component as a child element of the <footer> HTML element:
ReactDOM.render(<Footer />, document.querySelector('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
