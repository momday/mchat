
// TODO: implement the deny rules.
// 1) Deny the creation of the new chatroom when using an existing hashtag.

// TODO: Make sure that any hashtag starts with the '#' symbol
// 1) Deny the creation of the new chatroom when using an existing hashtag.




/*
DESCRIPTION:
 A chatroom document saves the messages sent between at least
 2 participants. The owner of the chatroom is the one who sends the first
 message.

RULES:
 - Only the participants can add messages to the chatroom and only participants can invite / add new participants.
 - Only the owner can delete the chatroom.
 - The participants list is recorded into the participants field as an array of ids.
 - By default, a new chatroom is private. That means that only the participants can view/edit it.
   Only the onwer of the chatroom can make it public.

SPECIAL:
 - All the messages of a chatroom are concatenated into the chatHistory field of the document.
 - Every message have a unique id made of the message owner id concatenated with the total number of messages (totalMessages field)

FIELDS:
    - hashtag: String;
        May be null but otherwise, it's unique hashtag that identifies the chatroom. It always starts with '#', eg: #finance, #kaneoh

    - creationDate: Date;
        Date of creation.

    - updatedDate: Date;
        Date of update.

    - ownerId: String;
        The _id of the first message owner.

    - owner: String;
        The name of the owner (eg: momday.profile.name)

    - private: Boolean;
        If true, only the participants can access this chatroom.
        Only the onwer of the chatroom can change that field.

    - ownerPicUrl: string; The path of the picture the owner. (temporary).
    - totalMessages: Total number of message. The value of this field is used to create each message unique id. This field only increases. It does not decrease even though some message may get deleted.

    - participants: Array of participants id.

    - chatHistory: Array of messages.
        Each message object contains the following fields:
            messageid: String;
                Unique identifier of the message.
            ownerId: String;
                The id of the message owner.
            owner: String;
                The name of the owner (eg: momday.profile.name)
            createdAt: Date;
                Date of creation.
            content: String;
                Content of the message.



 */

Chatrooms = new Mongo.Collection('chatrooms');


Chatrooms.allow({
    // Only the participants can add messages.
    update: function(userId, post) {return isParticipant(userId)},
    // Only the owner can delete the chatroom.
    remove: function(userId, post) {return ownsDocument(userId, chatroom)}
});


var isParticipant = function (userId) {
    // Check whether a given user is a participant or not.
    // If not, -1 is returned.
    var userIndex = _.indexOf(this.participants, userId);

    // Return false is -1, true otherwise.
    return userIndex===-1?false:true;
};


var ownsChatroom = function(userId) {
    // Check whether a given user is the owner of the chatroom.
    return this.ownerId === userId;
}


// Make the chatroom public.
// This method can only be performed by the owner of the chatroom.
var publishChatroom = function() {
    if (ownsChatroom) {
        this.private = false;
    }
}



/*
Chatroom.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'content', 'url', 'title').length > 0);
  }
});

Chatroom.deny({
  update: function(userId, post, fieldNames, modifiers) {
    var errors = validatePost(modifiers.$set)
    return errors.title || errors.content || errors.url;
  }
});



validatePost = function(post){

    var errors = {};

    if (!post.title)
        errors.title = "Please fill in the title";
    if (!post.content)
        errors.content = "Please fill in the content";
    if (!post.url)
        errors.url = "Please fill in the content";

    return errors;

}*/



// List of methods to be called from the client side.
// TODO: Enhance the security. Check which field can be updated.
Meteor.methods({

    // Method to be called from the client side when starting a new chat
    // A chatroom is created only after the first message is typed and sent.
    // As such, there is always a message in the chatroomAttributes.
    createChatroom: function(chatroomAttributes) {
        // Initial checking.
        check(Meteor.userId(), String);
        check(chatroomAttributes, {
            hashTag       : String,
            //message       : String
        });

        var creationDate = new Date()

        // check that the user is logged in.
        var user = Meteor.user();
        var chatroom = _.extend(chatroomAttributes, {
            ownerId: user._id,
            owner: user.username,
            creationDate: creationDate,

            /*chatHistory: {
                messageId : this.totalMessages,
                ownerId   : user._id,
                owner     : owner.username,
                createdAt : creationDate,
                message   : chatroomAttributes.message
            },*/

            totalMessages: 1,

        });
        var chatroomId = Chatrooms.insert(chatroom);

        return {
            _id: chatroom
        };
    },

    // Method to be called when a chat participant adds a comment.
    // This concatenates a new message into the array held by chatHistory.
    // The messageAttributes holds the following fields:
    //      - messageId
    //      - ownerId
    //      - owner (eg: momday.profile.name)
    //      - content (the content of the message)
    //      - creationdate
    //      - chatroomId (the id of the chatroom to add the message to)
    addMessage: function(messageAttributes) {

        // Get the current
        var user = Meteor.user();
        //var userId = user._id;


        // Initial checking.
        check(user._id, String);
        check(messageAttributes.message, String);
        check(messageAttributes.totalMessages, Number);

        var creationDate = new Date();


        // Update the chatroom.
        var chatroomId = Chatrooms.update({
            // Look for the chatroom identified by chatroomId
            _id: messageAttributes.chatroomId,
            }, {
                // Concatenate the new message to the chatHistory field
                $addToSet: {
                    chatHistory: {
                        messageId   : user._id + '-' + messageAttributes.totalMessages,
                        ownerId : user._id,
                        owner   : user.username,
                        createdAt   : creationDate,
                        message     : messageAttributes.message
                    },
                },
                // Set the updatedAt field of the chatroom.
                $set: {updatedAt: creationDate},

                // Incremment the total number of message.
                $inc: {totalMessages: 1}
            });
            //console.log("Done updating: " + chatroomId);
    }


    /*upvote: function(postId) {
        check(this.userId, String);
        check(postId, String);
        var affected = Chatroom.update({
            _id: postId,
            upvoters: {$ne: this.userId},
        }, {
            $addToSet: {upvoters: this.userId},
            $inc: {votes: 1}
        });
        if (! affected)
            throw new Meteor.error('invalid', "You are not allow to vote twice");

    }*/
});
