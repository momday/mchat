Template.chatMessage.helpers({
  // This helpers will display the elapse time
  // in the form "2 days ago", "6 hours ago", etc...
  elapseTime: function() {
      var elapse = moment(this.createdAt) - moment(new Date());
      return moment.duration(elapse).humanize();
  }
})

/*This rendered callback function will scroll down each chat room to the
last message. This happens every time a message is added.
However, we don't need this behavior on the first page loading
when all the messages are displayed one by one. Doing so during the first page loading causes a weird behavior where it's not possible to scroll UP for a few seconds.

To prevent this, only attach the scroll down behavior to new messages only
after the first page is loaded (where all the existing messages are displayed).

This is done by checking that the parent element 'grid-stack' already exists.
*/

Template.chatMessage.rendered = function() {

    //console.log('rendered ' + chatroomListRendered);
    var id = '#' + this.data.messageId;

    var grid = $('.grid-stack').data('gridstack');

    if (grid) {
            // TODO: check if this is this really useful
            $(id).focus();

            // Using jQuery to get the immediate parent.
            var parent = $(id).parent();

            // There is a weird bug about dynamically getting the
            // scrollHeight. Sometime, it seems to get stuck and not
            // updated appropriately. This results in the scroller now
            // scrolling down and not showing the last message.
            // This happens for a few seconds and then get
            // updated correctly.

            // TODO: check what's going on.
            //console.log('About to scroll');
            //var scr = $(parent)[0].scrollHeight;
            //$(parent).scrollTop(scr);
            //console.log('scr: ' + scr);
            //console.log('scroll done');

            // Temporary solution to prevent that bug:
            // Set the scrollheight to 999999
            var maxHeigh = 999999;
            // give some short animation to the scrolling
            $(parent).animate({scrollTop: maxHeigh}, 1000);
            //$(parent).scrollTop(maxHeigh);

        }
}


