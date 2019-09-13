import React from 'react';

// This class contains a list of links to output
class Links extends React.Component {
  render(){
    return <div id="links">
      <a className="App-link" href="https://duckduckgo.com" target="_blank" rel="noopener noreferrer">Search</a>
      <a className="App-link" href="https://protonmail.com" target="_blank" rel="noopener noreferrer">Mail</a>
      <a className="App-link" href="https://signal.org" target="_blank" rel="noopener noreferrer">Messaging</a>
      <a className="App-link hidden" href="https://chrisfornesa.com" target="_blank" rel="noopener noreferrer">Chris Fornesa</a>
    </div>;
  }
}

// Export the Links class React component as Links:
export default Links;