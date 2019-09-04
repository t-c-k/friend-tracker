import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Friends from '../api/friends';

class HelloData extends Component {

	render() {
		return (
			<div>
				<h4>Use this to track how many friends you undoubtedly have!</h4>
        <p>You currently have {this.props.numberOfFriends} friends.</p>
			</div>
		);
	}
}

export default HelloContainer = withTracker(() => {
	return {
    numberOfFriends: Friends.find().count(),
	};
})(HelloData);