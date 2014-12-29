Template.header.events({
    // Catch the pressed button event
    'click #new-chat': function() {
        //e.preventDefault();
bootbox.dialog({
                title: "Create a new chatroom.",
                message: '<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">Hashtag: </label> ' +
                    '<div class="col-md-4"> ' +
                    '<input id="hashtag" name="hashtag" type="text" placeholder="hashtag" class="form-control input-md"> ' +
                    '<span class="help-block">Your hashtag?</span> </div> ' +
                    '</div> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="privacy">Privacy: </label> ' +
                    '<div class="col-md-4"> <div class="radio"> <label for="privacy-0"> ' +
                    '<input type="radio" name="privacy" id="privacy-0" value="true" checked="checked"> ' +
                    'Private</label> ' +
                    '</div><div class="radio"> <label for="privacy-1"> ' +
                    '<input type="radio" name="privacy" id="privacy-1" value="false">Public</label> ' +
                    '</div> ' +
                    '</div> </div>' +
                    '</form> </div>  </div>',
                buttons: {
                    danger: {
                        label: "Cancel",
                        className: "btn-danger",
                        callback: function() {
                            //Example.show("uh oh, look out!");
                        }
                    },
                    success: {
                        label: "Create",
                        className: "btn-success",
                        callback: function () {
                            var hashtag = $('#hashtag').val();

                            // If hashtag is not null then check that the first
                            // character is an hash key '#'
                            hashtag = sanitizeHashtag(hashtag);
                            var privacy = $("input[name='privacy']:checked").val()
                            // Convert the string into a boolean
                            privacy = JSON.parse(privacy);
                var chatRoom = {
                    hashTag: hashtag,
                    isPrivate: privacy
                };
                Meteor.call('createChatroom', chatRoom, function(error, result) {

                });
                        }
                    },
                }
            }
        );

        /*bootbox.prompt("hashtag?", function(result) {
            if (result === null) {
                console.log("Cancelling new chatroom");
            } else {



                // If result is not null then check that the first
                // character is an hash key '#'
               if (result.length != 0)
                   if (result.charAt(0) !== '#')
                       result = '#'+result;

                var chatRoom = {
                    hashTag: result,
                };
                Meteor.call('createChatroom', chatRoom, function(error, result) {

                });
            }
        });*/


    }
})




