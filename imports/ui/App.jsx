import React from 'react';
import Hello from './Hello.jsx';
import Friends from './Friends.jsx'
import Goodbye from './Goodbye.jsx';

const App = () => (
  <div>
    <h1>Welcome to Friend Tracker!</h1>
    <Hello />
    <Friends />
    <Goodbye />
  </div>
);

export default App;
