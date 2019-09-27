import React from 'react';

// The Footer class React component has a state, year, that automatically displays the current year as part of the footer's copyright information.
class Footer extends React.Component {
  constructor(){
    super();
    // Only state is year, which is set to the Date object's getFullYear function
    this.state = {
      year: new Date().getFullYear(),
    }
  }

  // This method sets the year to the Date object's getFullYear function
  getTheYear(){
    this.setState({year: new Date().getFullYear()});
  }

  // This re-renders the getTheYear method as needed
  componentDidMount(){
    this.interval = setInterval(() => this.getTheYear());
  }

  // Render the footer with the year state
  render(){
    return <span><a href="https://www.chrisfornesa.com" target="_blank" rel="noopener noreferrer">Chris Fornesa</a> &copy; {this.state.year} || <a href="https://php.time.chrisfornesa.com">PHP</a></span>;
  }
}

// Export the Footer class React component as Footer:
export default Footer;
