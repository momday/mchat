Template.chatroom.helpers({
    strChatHistory: function() {
        return JSON.stringify(this.chatHistory);
    },

    // returning all the chat history.
    messages: function() {
        return this.chatHistory;
    },

    // This helper will be called by the template for 2 purposes:
    // 1) Show the privacy status of the chatroom in the title.
    // 2) Show the opposite status in the status toggle button
    // As such the 'straight' argument is there just to toggle
    // between both state of the isPrivate field
    privatize: function(straight) {
        if (straight){
            return this.isPrivate?'Private':'Public';
        } else {
            return this.isPrivate?'Public':'Private';
        }
    },

    isOwner: function() {
        return Meteor.userId() === this.ownerId;
    },
});

/*This function is called when the chatroom is rendered and will
scroll down the chatroom to the last message.

  It will be called everytime a chatroom is rendered which happens when:
    - The dashboard page is loaded.
    - When a new chatroom is added.

   In the case where a new chatroom is added, the newly created one will
   overlapp with the first chatroom of the grid.
   This is because Blaze is not calling the add_widget method from gridstack.

   To fix this, we need to manually call it.
   We do this only in this case (new chatroom added) and not when the dashboard
   page is loaded.

*/

Template.chatroom.rendered = function() {


    // Scroll down the chatroom to the last message when it's rendered.
    var innerId = '#'+this.data._id+'-panel-content';
    var scr = $(innerId)[0].scrollHeight;
    $(innerId).animate({scrollTop: scr},1000);


    // This is to correctly position a newly created chatroom.
    // Check that the grid-stack element, exists.
    // If it exists, it means that the dashboard page has already been
    // loaded.
    var grid = $('.grid-stack').data('gridstack');
    if (grid) {
        //Once it's rendered, move it to the right position.
        var elName = "#"+this.data._id;
        var el = $(elName);
        grid.add_widget(el, 0, 0, 4, 5, true);
        adjustGridStackContent(elName);
    }
}

Template.chatroom.events({
    'resizestop': function(event, ui) {
        console.log('resize');

         adjustGridStackContent("#" + this._id);

    },

    'click #delete-chatroom': function(event, ui) {
        /*console.log(event);
        console.log(ui);*/

        /*el = $('#'+ ui.data._id);
          var grid = $('.grid-stack').data('gridstack');

          console.log(grid.nodes);
          grid.remove_widget(el);*/

        bootbox.confirm("Delete this chatroom?", function(result) {
            if (result === true){
                var chatroomId = ui.data._id;


                //Set the chatroom private field to false
                Meteor.call('deleteChatroom', chatroomId, function(error, messageId) {
                    if (error){
                        throwError(error.reason);
                    } else {
                        Session.set('refresh', true);
                        console.log('chatroom deleted');
                    }
                });
            } else {
                //console.log('Confirm result: ' + result);
            }
        });
    },

    'click #go-public': function(event, ui) {
        //console.log('Go public');

        var privacyState = 'Private';
        if (this.isPrivate)
            privacyState = 'Public';


        bootbox.confirm("Make this chatroom " + privacyState  + "?", function(result) {
            if (result === true){
                var chatroomId = ui.data._id;
                //console.log(id);

                //Set the chatroom private field to false
                Meteor.call('togglePrivacy', chatroomId, function(error, messageId) {
                    if (error){
                        throwError(error.reason);
                    } else {
                        //console.log('went public');
                    }
                });



            } else {
                //console.log('Confirm result: ' + result);

            }
        });
    }

})


