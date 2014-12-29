
Meteor.publish('chatrooms', function(){
    //check(chatRoomId, String);

    // Need to publish onl the chatrooms that are public or the chatroom
    // where the user is already a participant

    return Chatrooms.find({isPrivate: false});
    //return Chatrooms.find({});
});




Meteor.publish('my-chatrooms', function(options) {
    check(options, {
        /*sort: Object,
        limit: Number,*/
        //isPrivate : Boolean,
        ownerId: String
    });

    return Chatrooms.find({}, options);
});
