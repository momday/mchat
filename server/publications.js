
Meteor.publish('chatrooms', function(){
    //check(chatRoomId, String);

    // Need to publish onl the chatrooms that are public or the chatroom
    // where the user is already a participant
    return Chatrooms.find();
});
