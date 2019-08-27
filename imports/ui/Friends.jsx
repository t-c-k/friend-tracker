import React, { Component } from 'react';
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
            </div>
        );
    }

    makeFriend(friend) {
        return (
            <li key={friend._id}>{friend.firstName} {friend.lastName}</li>
        );
    }
}

export default InfoContainer = withTracker(() => {
    return {
        friends: Friends.find().fetch(),
    };
})(FriendData);