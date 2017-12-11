import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB8AK83UPAFaGyDFJv8PZmGnNWr6JkW-Mc';

// create a new component to produce html
const App = function() {
  return <div>Hi!</div>;
}

// Take components generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
