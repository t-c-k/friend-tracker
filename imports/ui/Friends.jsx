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
				<h5>Add new friends:</h5>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="firstNameInput" id="firstNameInput" placeholder="First Name" />
					<input type="text" ref="lastNameInput" placeholder="Last Name" />
					<button type="submit">Add</button>
				</form>
				<ul>{ friends }</ul>
			</div>
		);
	}
	
	makeFriend(friend) {
		return (
			<li key={friend._id}>
				<span ref="fullName">{friend.firstName} {friend.lastName}</span>
				<button className="delete" onClick={this.deleteThisFriend.bind(this, friend.firstName)}>x</button>
			</li>
		);
	}

	deleteThisFriend(fName) {
		// var doc = MyCollection.findOne({ someName: someValue });
		// MyCollection.update({ _id: doc._id }, {$set:{something:true}});

		console.log(fName);
		var f = Friends.findOne({ firstName: fName });
		Friends.remove({ _id:f._id });
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

		document.getElementById("firstNameInput").focus();
	}
}

export default InfoContainer = withTracker(() => {
	return {
		friends: Friends.find({}, { sort: {lastName: 1 } }).fetch(),
	};
})(FriendData);