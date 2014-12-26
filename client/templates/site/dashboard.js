Template.dashboard.helpers({

    /*chatroomCount: function() {
        return Chatrooms.find().count();
    },*/

});



Template.dashboard.rendered = function() {
    var options = {
        cell_height: 80,
        vertical_margin: 15,
    };
    $('.grid-stack').gridstack(options);

    console.log('dashboard rendered');

    // This function is called to fill up inside the chatroom.
    adjustGridStackContent();

}
