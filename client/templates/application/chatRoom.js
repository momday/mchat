Template.chatroom.helpers({
    strChatHistory: function() {
        return JSON.stringify(this.chatHistory);
    },

    messages: function() {
        return this.chatHistory;
    }
});


Template.chatroom.rendered = function() {
var scr = $('.grid-stack-inner-content')[0].scrollHeight;
$('.grid-stack-inner-content').animate({scrollTop: scr},2000);
console.log('cocuou');
}
