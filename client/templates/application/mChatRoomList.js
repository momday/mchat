Template.chatroomList.helpers({
    chatrooms: function() {
        return Chatrooms.find();
    },

    tempo: function() {
        return Session.get('refresh');
    }
})

Template.chatroomList.rendered = function() {

    //console.log('chatroomList rendered');

}
