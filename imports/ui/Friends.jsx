import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Friends from '../api/friends';

class FriendData extends Component {

	render() {
		const friends = this.props.friends.map(
			friend => this.makeFriend(friend)
		);

		return (
			<div>
				<h2>Friends</h2>
				<ul>{ friends }</ul>
				<h5>Add new friends:</h5>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="firstNameInput" placeholder="First Name" />
					<input type="text" ref="lastNameInput" placeholder="Last Name" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
	
	makeFriend(friend) {
		return (
			<li key={friend._id}>{friend.firstName} {friend.lastName}</li>
		);
	}

	handleSubmit(event) {
		event.preventDefault();

		const firstName = ReactDOM.findDOMNode(this.refs.firstNameInput).value.trim();
		const lastName = ReactDOM.findDOMNode(this.refs.lastNameInput).value.trim();

		Friends.insert({
			firstName,
			lastName,
			createdAt: new Date(),
		});

		ReactDOM.findDOMNode(this.refs.firstNameInput).value = '';
		ReactDOM.findDOMNode(this.refs.lastNameInput).value = '';
	}
}

export default InfoContainer = withTracker(() => {
	return {
		friends: Friends.find().fetch(),
	};
})(FriendData);