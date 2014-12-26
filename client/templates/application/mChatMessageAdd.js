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

    //console.log(template);

    // Use jquery to get the value that's been entered.
    var $body = $(e.target).find('[name=body]');

    //console.log('data ' + template.data._id);

    // Save the content into a message object.
    var message = {
      message: $body.val(),
      chatroomId: template.data._id,
      // this needs to be saved as it is used to create
      // the message unique id
      totalMessages: template.data.totalMessages
    };

    // Call the 'addMessage' server side method
    Meteor.call('addMessage', message, function(error, messageId) {
      if (error){
        throwError(error.reason);
      } else {
        // Reset the form message.
        $body.val('');
      }
    });
  }
});
