import React from 'react';

// The CurrentDate class React component outputs the current date
class CurrentDate extends React.Component {
  constructor(){
    super();
    // There is only one state named dateToday:
    this.state = {
      dateToday: new Date() // creates a new Date object
    }
  }

  // This method sets the dateToday state to a new Date object:
  getTheDate(){
    this.setState({dateToday: new Date()});
  }

  // This method will re-render the getTheDate method as needed:
  componentDidMount(){
    this.interval = setInterval(() => this.getTheDate());
  }

  // This method will unmount this.interval, using clearInterval, when the user closes the application:
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  
  // This will render the current date according to the local standards of displaying the date:
  render(){
    return <span>{this.state.dateToday.toLocaleDateString()}</span>;
  }
}

// Export the CurrentDate class React component as CurrentDate:
export default CurrentDate;