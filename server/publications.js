
Meteor.publish('chatrooms', function(){
    //check(chatRoomId, String);
    return Chatrooms.find();
});
