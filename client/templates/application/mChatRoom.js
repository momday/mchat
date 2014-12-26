Template.chatroom.helpers({
    strChatHistory: function() {
        return JSON.stringify(this.chatHistory);
    },

    // returning all the chat history.
    messages: function() {
        return this.chatHistory;
    }
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


    // Scroll down the chatroom to the last message when it's renedered.
    var innerId = '#'+this.data._id+'-inner-content';
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
    }
}

Template.chatroom.events({
    'resizestop': function(event, ui) {
        console.log('resize');
        /*console.log(event);
          console.log(ui);*/

         adjustGridStackContent("#" + this._id);

    }
})


