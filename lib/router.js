//Router.js

Router.configure({
    layoutTemplate: 'layout',


    findOptions: function() {
        //return {sort: this.sort, limit: this.postLimit()};
        return {ownerId: Meteor.userId()};
    },

    // Wait for the data to be available.
    /*waitOn: function() {

        //var options = {sort: {submitted: -1}};
        return [
            Meteor.subscribe('chatrooms'),
            Meteor.subscribe('my-chatrooms', {}),
            Meteor.subscribe('participated-chatrooms', {}),
        ];
        [> For example
          var options = {sort: {submitted: -1}, limit: 5};
        return [Meteor.subscribe('notifications'),
                Meteor.subscribe('posts', options)]; <]
    },*/
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',

});


// Set the document title to the current route.
Router.onAfterAction(function() {
        document.title = 'ChatChatChat' + Router.current().route.getName(); // - ' + Router.current().name;
});


var requireLoging = function() {
    if (!Meteor.user()) {

            this.render('login');
        if (Meteor.logginIn()) {
            //this.render(this.loadingTemplate);
            this.render(this.login);
        } else {
            //this.render('login');
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}


//Router.onBeforeAction(requireLoging);
Router.onBeforeAction(function() {
    //console.log('Need to login');
  if (!Meteor.userId()) {
    this.render('login');
    //this.stop();
  } else {
    this.next();
  }
});



ChatListController = RouteController.extend({

    template: 'dashboard',
    increment: 5,
    /*postLimit: function() {
        return parseInt(this.params.postLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: this.sort, limit: this.postLimit()};
    },*/
    waitOn: function() {
        return [Meteor.subscribe('chatrooms'),
            Meteor.subscribe('my-chatrooms', {}),
            Meteor.subscribe('participated-chatrooms', {})];    },
    /*subscriptions: function() {
        this.postsSub = [Meteor.subscribe('chatrooms'),
                         Meteor.subscribe('my-chatrooms', {}),
                         Meteor.subscribe('participated-chatrooms', {})];
    },*/
    /*posts: function() {
        return Posts.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.posts().count() === this.postLimit();
        //var nextPath = this.route.path({postLimit: this.postLimit() + this.increment});
        return {
            posts: this.posts(),
            ready: this.postsSub.ready,
            nextPath: hasMore ? this.nextPath() : null
        }
    }, */


    /*onBeforeAction: function() {
        $('body').addClass('high emerald-default htmls htmls_widgets');
        this.next();
    },

    onStop: function() {
        $('body').removeClass('high emerald-default htmls htmls_widgets');
    }*/

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




/*Router.route('/chatrooms', {
                //name: 'login'
                name: 'dashboard',
                controller: ChatListController
});*/

Router.route('/', {
                //name:'login'
                name: 'dashboard',
                controller: ChatListController
});

