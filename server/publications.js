
// Publish only the public chatroom.
Meteor.publish('chatrooms', function(){
    //check(chatRoomId, String);

    // Need to publish onl the chatrooms that are public or the chatroom
    // where the user is already a participant

    return Chatrooms.find({isPrivate: false});
    //return Chatrooms.find({});
});


// Publish the chatrooms whose owner is the current user.
Meteor.publish('participated-chatrooms', function() {

    var userId = this.userId;
    check(userId, String);
    return Chatrooms.find({participants: {$in: [userId]}});

});

// Publish the chatrooms where the current user is a participant.
Meteor.publish('my-chatrooms', function() {

    var userId = this.userId;
    check(userId, String);
    /*check(options, {
        [>sort: Object,
        limit: Number,<]
        //isPrivate : Boolean,
        userId: String
    });*/

    //return Chatrooms.find({}, options);
    return Chatrooms.find({ownerId: userId});

});
