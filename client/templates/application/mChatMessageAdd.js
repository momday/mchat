/*Template.chatMessageAdd.created = function() {
  Session.set('chatMessageAddErrors', {});
}*/

Template.addChat.helpers({
  /*errorMessage: function(field) {
    return Session.get('chatMessageAddErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('chatMessageAddErrors')[field] ? 'has-error' : '';
  },*/

});

Template.addChat.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body]');
    console.log('data ' + template.data._id);
    var message = {
      message: $body.val(),
      chatroomId: template.data._id,
      totalMessages: template.data.totalMessages
    };

    /*var errors = {};
    if (! message.body) {
      errors.body = "Please write some content";
      return Session.set('chatMessageAddErrors', errors);
    }*/

    Meteor.call('addMessage', message, function(error, messageId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');

        var scr = $('.grid-stack-inner-content')[0].scrollHeight;
        $('.grid-stack-inner-content').animate({scrollTop: scr});

      }
    });
  }
});
