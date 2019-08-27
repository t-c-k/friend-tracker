import { Meteor } from 'meteor/meteor';
import Friends from '/imports/api/friends';

function insertFriend(firstName, lastName) {
  Friends.insert({ firstName, lastName, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Friends collection is empty, add some data.
  if (Friends.find().count() === 0) {
    insertFriend(
      'Barry',
      'Allen'
    );

    insertFriend(
      'Wally',
      'West'
    );

    insertFriend(
      'Harry',
      'Smallbone'
    );

    insertFriend(
      'Dave',
      'Romero'
    );
  }
});
