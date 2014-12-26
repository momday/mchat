//If this is in the deployment server don't do anything.

if (!Meteor.settings.deployed || Meteor.settings.deployed!=='true') {
    console.log("This is a testing environment.");
        if (Chatrooms.find().count() === 0) {
            console.log("Filling up fake data");
            var now = new Date().getTime();

            /* ****************************************
               Create two users
             ****************************************/
            var momdayId = Meteor.users.insert({
                profile: { name: 'Momday Dok',
                    picUrl: '/images/faker/avatars/48/Faces_Users-03.png' },
                    username: 'momday'
            });
            var momday = Meteor.users.findOne(momdayId);
            Accounts.setPassword(momdayId, 'momday');

            var claireId = Meteor.users.insert({
                profile: { name: 'Claire Tseng',
                    picUrl: '/images/faker/avatars/48/Faces_Users-09.png' },
                    username: 'claire'
            });
            var claire = Meteor.users.findOne(claireId);
            Accounts.setPassword(claireId, 'claire');




            var creationDate = new Date(now - 7 * 3600 * 1000);


            var chatroomId = Chatrooms.insert({
                hashTag: '#firstChat',
                ownerId: claire._id,
                owner: claire.profile.name,
                authorPicUrl: claire.profile.picUrl,
                private: true,
                submitted: creationDate,
                chatHistory:[
                    {
                    messageId: claireId + "-0",
                    ownerId: claireId,
                    owner: claire.profile.name,
                    createdAt: creationDate,
                    message: "First chat"
                },
                {
                    messageId: claireId + "-1",
                    ownerId: claireId,
                    owner: claire.profile.name,
                    createdAt: creationDate,
                    message: "Cool chat"
                }
                ],
                totalMessages: 2

            });


            creationDate = new Date(now - 10 * 3600 * 1000);
            var chatroomId2 = Chatrooms.insert({
                hashTag: '#investment',
                ownerId: momday._id,
                owner: momday.profile.name,
                authorPicUrl: momday.profile.picUrl,
                private: true,
                submitted: creationDate,
                chatHistory:[
                    {
                    messageId: momdayId + "-0",
                    ownerId: momdayId,
                    owner: momday.profile.name,
                    createdAt: creationDate,
                    message: "Second First chat"
                },
                {
                    messageId: momdayId + "-1",
                    ownerId: momdayId,
                    owner: momday.profile.name,
                    createdAt: creationDate,
                    message: "Second Cool chat"
                }
                ],
                totalMessages: 2

            });



            creationDate = new Date(now - 15 * 3600 * 1000);
            var noHashChat = Chatrooms.insert({
                hashTag: '',
                ownerId: momday._id,
                owner: momday.profile.name,
                authorPicUrl: momday.profile.picUrl,
                private: true,
                submitted: creationDate,
                chatHistory:[
                    {
                    messageId: momdayId + "-0",
                    ownerId: momdayId,
                    owner: momday.profile.name,
                    createdAt: creationDate,
                    message: "Third First chat"
                },
                {
                    messageId: momdayId + "-1",
                    ownerId: momdayId,
                    owner: momday.profile.name,
                    createdAt: creationDate,
                    message: "Third Cool chat"
                }
                ],
                totalMessages: 2

            });

        }
    } else if (Meteor.settings.deployed && Meteor.settings.deployed=='true') {
        console.log('Deployement server');
    }


