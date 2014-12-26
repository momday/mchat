## Synopsis

This is an experimental attempt to build a multi-chatroom application using the meteor framework.  
It is a Bootstrap-styled application but rely on gridstack.js for the layout.


It comes with the following Meteor packages:

1. accounts-password
2. anti:fake
3. mizzao:bootstrap-3
4. ian:accounts-ui-bootstrap-3
5. less
6. momentjs:moment
7. iron:router
8. pfafman:font-awesome-4
9. sacha:spin

In addition, externals plugins/tools are used:

1. Gridstack.js     [(http://troolee.github.io/gridstack.js)](http://troolee.github.io/gridstack.js/)
2. animate.css      [(http://daneden.me/animate)](http://daneden.me/animate)
3. colors           [(https://github.com/mrmrs/colors)](https://github.com/mrmrs/colors)

The basic tree folder is as followed:

<pre>
── client
│   ├── helpers
│   ├── js
│   ├── lib
│   │   └── gridstack
│   ├── stylesheets
│   │   ├── animate
│   │   └── mrmrs-colors
│   │       └── less
│   └── templates
│       ├── application
│       ├── includes
│       └── site
├── lib
│   └── collections
├── packages
├── public
│   ├── fonts
│   └── img
└── server
</pre>

## Motivation

I kinda fell in love with Meteor and wanted to create an application using
that framework.  
More of a learning experience, this web app includes all the fundamental element of
a meteor app:

1. Routing
2. Template
3. Publish / Subscription
4. Packaging (coming soon)

I've purposely added a LOT of comments to the code for new learner to understand 
going on.  

Please feel free to point me to any coding mistakes or highlight any bugs.
Thanks.

## Requirement

1. Meteor [(https://www.meteor.com/install)](https://www.meteor.com/install)

## Installation

Just clone it and run the command meteor in the terminal  
> meteor

or if the default port (3000) is taken...  

> meteor --port 9000  

or any other available port number

## Contributors

Me and ... you?

## License

This is licensed under the MIT license. (http://opensource.org/licenses/MIT)
