import React, { Component } from 'react';
import InfoContainer from './Friends.jsx';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <p>Use this to keep track of all the many friends you undoubtedly have.</p>
        <p>You currently have {InfoContainer.numberOfFriends}</p>
      </div>
    );
  }
}
