Template.dashboard.helpers({

    chatroomCount: function() {
        return Chatrooms.find().count();
    },

});



Template.dashboard.rendered = function() {
    var options = {
        cell_height: 80,
        vertical_margin: 15,
    };
    $('.grid-stack').gridstack(options);


    //console.log('dashboard rendered');

    // When the chatroom is rendered first have its body filled up the space
    // between the header and the tail.
    adjustGridStackContent();



    /*var totalHeight = $(".grid-stack-item-content").height();
    var headHeight  = $(".grid-stack-item-content .header").height();
    var tailHeight  = $(".grid-stack-item-content .tail").height();

    console.log('totalHeight= ' + totalHeight);
    console.log('headHeight= ' + headHeight);
    console.log('tailHeight= ' + tailHeight);

    var fillRemaining = totalHeight - headHeight - tailHeight - 20;



    console.log(fillRemaining);
    $(".grid-stack-item-content .content").css('height',fillRemaining);*/

}
