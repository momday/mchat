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
        document.title = 'Kaneoh ' + Router.current().route.getName(); // - ' + Router.current().name;
});





Router.route('/', {
                name: 'dashboard'
});
