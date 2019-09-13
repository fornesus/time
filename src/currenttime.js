import React from 'react';

// The CurrentTime class is a React component that displays the current time based on the Date object.
class CurrentTime extends React.Component {
  constructor(){
    super();
    // There are four states: dateToday, seconds, minutes, and hours.
    this.state = {
      // Date object itself:
      dateToday: new Date(),
      // The current second:
      seconds: new Date().getSeconds(),
      // THe current minute:
      minutes: new Date().getMinutes(), 
      // The current hour:
      hours: new Date().getHours(),
    }
  }

  // This method sets dateToday to the Date object:
  getTheDate(){
    this.setState({dateToday: new Date()});
  }

  // This method sets seconds to the Date object's getSeconds method:
  getSecond(){
    this.setState({seconds: (new Date().getSeconds())});
  }

  // This method sets minutes to the Date object's getMinutes method:
  getMinute(){
    this.setState({minutes: (new Date().getMinutes())});
  }

  // This method sets hours to the Date object's getHours method:
  getHour(){
    this.setState({hours: (new Date().getHours())});
  }

  // This method re-renders data
  componentDidMount(){
    // Reset the date:
    this.interval = setInterval(() => this.getTheDate());
    // Reset the seconds:
    this.interval = setInterval(() => this.getSecond());
    // Reset the minutes:
    this.interval = setInterval(() => this.getMinute());
    // Reset the hours:
    this.interval = setInterval(() => this.getHour());
  }

  // This method unmounts the this.interval component via clearInterval when the user closes the program.
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  // This renders the current time in two formats: the localized format and the 24-hour format.
  render(){
    return <div>
      <div className="current-time">
        {/* The time displayed in the localized format */}
        {this.state.dateToday.toLocaleTimeString()}
      </div>
      <div className="current-time">
        {/* The time displayed in 24-hour format, with the hours, minutes, and seconds states displayed with a leading "0" if it is currently a single digit */}
        {(this.state.hours < 10) ? ("0" + this.state.hours) : this.state.hours}:{(this.state.minutes < 10) ? ("0" + this.state.minutes) : this.state.minutes}:{(this.state.seconds < 10) ? ("0" + this.state.seconds) : this.state.seconds}
      </div>
    </div>;
  }
}

// Export the CurrentTime class React component as CurrentTime:
export default CurrentTime;