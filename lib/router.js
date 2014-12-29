//Router.js

Router.configure({
    layoutTemplate: 'layout',


    findOptions: function() {
        //return {sort: this.sort, limit: this.postLimit()};
        return {ownerId: Meteor.userId()};
    },

    // Wait for the data to be available.
    waitOn: function() {

        //var options = {sort: {submitted: -1}};
        return [
            Meteor.subscribe('chatrooms'),
            //Meteor.subscribe('my-chatrooms', {ownerId: Meteor.userId()})
        ];
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


var requireLoging = function() {
    if (!Meteor.user()) {

            this.render(this.loadingTemplate);
        /*if (Meteor.logginIn()) {
            this.render(this.loadingTemplate);
        }else {
            this.render('accessDenied');
        }*/
    } else {
        this.next();
    }
}

Router.route('/chatroom/:_id', {
                 name: 'chatroom',
                 data: function(){
                     return Chatrooms.findOne(this.params._id);
                 },
                 waitOn: function() {
                     return [Meteor.subscribe('chatrooms', this.params._id)];
                 }
            });


Router.onBeforeAction(requireLoging);

Router.route('/', {
                name: 'dashboard'
});

