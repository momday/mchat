Template.dashboard.helpers({

    chatroomCount: function() {
        return Chatrooms.find().count();
    },

});



Template.dashboard.rendered = function() {
    var options = {
        cell_height: 80,
        vertical_margin: 20,
    };
    $('.grid-stack').gridstack(options);
}
