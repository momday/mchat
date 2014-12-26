Template.dashboard.helpers({

    chatroomCount: function() {
        return Chatrooms.find().count();
    },

});



Template.dashboard.rendered = function() {
    var options = {
        cell_height: 80,
        vertical_margin: 15,
    };
    $('.grid-stack').gridstack(options);

    // This session variable is used by the message template rendered callback.
    Session.set("chatroomListRendered", "true");

    console.log('dashboard rendered');
}
