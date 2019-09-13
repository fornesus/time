import React, { Component } from 'react';
// import logo from './logo.svg'; // This import will not be used as of yet
import './App.css';

// Make imports
// Import the CurrentDate class React component:
import CurrentDate from './currentdate.js';
// Import the CurrentTime class React component:
import CurrentTime from './currenttime.js';
// Import the Links class React component:
import Links from './links.js';

// The App class React Component holds the majority of the application's code and functionality, including the date, time, and pertinent links:
class App extends Component {
  // Render the website itself as <div class="App"> using the imported CurrentDate, CurrentTime, and Links class React components:
  render() {
    // <img src={logo} className="App-logo" alt="logo" />
    return (
      <div className="App">
        <header className="App-header">
          {/* <CurrentDate /> refers to the CurrentDate component and displays the current date in the user's local standardized format */}
          <h1>Today is <CurrentDate /></h1>
          {/* <CurrentTime /> refers to the CurrentTime component and displays the current time in the 24-hour and standard formats */}
          <CurrentTime />
        </header>
        <navigation>
          {/* <Links /> refers to the Links component and displays pertinent links */}
          <Links />
        </navigation>
      </div>
    );
  }
}

// Export the App class React component as App
export default App;
