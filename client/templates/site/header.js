Template.header.events({
    // Catch the pressed button event
    'click #new-chat': function() {
        //e.preventDefault();
        var chatRoom = {
            hashTag: '#google',
        };
        Meteor.call('createChatroom', chatRoom, function(error, result) {

        });
    }
})




