Template.chatroomList.helpers({
    chatrooms: function() {
        return Chatrooms.find();
    }
})

Template.chatroomList.rendered = function() {

    //console.log('chatroomList rendered');

}
