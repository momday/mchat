
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.layout.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.layout.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);

      //$('.btn').addClass('animated bounceOutLeft');


      /*$('#title').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#title').remove('animated bounceOutLeft');
      });*/
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
