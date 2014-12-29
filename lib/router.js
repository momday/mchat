//Router.js

Router.configure({
    layoutTemplate: 'layout',

    // Wait for the data to be available.
    waitOn: function() {

        //var options = {sort: {submitted: -1}};
        return Meteor.subscribe('chatrooms');

        /* For example
          var options = {sort: {submitted: -1}, limit: 5};
        return [Meteor.subscribe('notifications'),
                Meteor.subscribe('posts', options)]; */
    },
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',

});

// Set the document title to the current route.
Router.onAfterAction(function() {
        document.title = 'ChatChatChat' + Router.current().route.getName(); // - ' + Router.current().name;
});



Router.route('/chatroom/:_id', {
                 name: 'chatroom',
                 data: function(){
                     return Chatrooms.findOne(this.params._id);
                 },
                 waitOn: function() {
                     return [Meteor.subscribe('chatrooms', this.params._id)];
                 }
            });


Router.route('/', {
                name: 'dashboard'
});
