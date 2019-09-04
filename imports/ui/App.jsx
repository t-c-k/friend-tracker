import React from 'react';
import Hello from './Hello.jsx';
import Friends from './Friends.jsx'
import Goodbye from './Goodbye.jsx';

const App = () => (
  <div className="container">
    <h1 className="welcome">Welcome to Friend Tracker!</h1>
    <Hello />
    <Friends />
    <Goodbye className="goodbye"/>
  </div>
);

export default App;
