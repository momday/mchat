
Meteor.publish('chatrooms', function(){
    //check(chatRoomId, String);

    // Need to publish onl the chatrooms that are public or the chatroom
    // where the user is already a participant

    return Chatrooms.find({isPrivate: false});
    //return Chatrooms.find({});
});



Meteor.publish('participated-chatrooms', function(options) {
    check(options, {
        /*sort: Object,
        limit: Number,*/
        //isPrivate : Boolean,
        userId: String
    });

    //return Chatrooms.find({}, options);
    return Chatrooms.find({participants: {$in: [options.userId]}});

});

Meteor.publish('my-chatrooms', function(options) {
    check(options, {
        /*sort: Object,
        limit: Number,*/
        //isPrivate : Boolean,
        userId: String
    });

    //return Chatrooms.find({}, options);
    return Chatrooms.find({ownerId: options.userId});

});
