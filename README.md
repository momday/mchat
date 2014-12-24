## Synopsis

This is my meteor boiler plate.
Meteor with the following packages:

1. accounts-password            Password support for accounts
2. anti:fake                    Random text and data generator
3. autopublish                  Publish the entire database to all clients
4. ian:accounts-ui-bootstrap-3  * Bootstrap-styled accounts-ui with multi-language support.
5. less                         The dynamic stylesheet language
6. meteor-platform              Include a standard set of Meteor packages in your ap
7. iron:router
8. pfafman:font-awesome-4

The "insecure" package was removed and the basic tree folder is as followed:

This boilerplate is based on kube css framework and uses mrmrs-colors stylesheets.
The less source code being located in the sub-directory of the stylesheets.

<pre>
├── client
│   ├── js
│   ├── stylesheets
│   │   ├── animate
│   │   ├── kube
│   │   │   ├── js
│   │   │   └── less
│   │   ├── mrmrs-colors
│   │   └── normalize
│   └── templates
│       ├── includes
│       └── site
├── lib
├── packages
├── public
│   ├── fonts
│   └── img
└── server
</pre>

## Motivation

As I don't like to redo the same steps over and over when starting a meteor
project, here is the basic of what I need.

## Installation

Just clone it and start developing.
Best to have meteor installed before hand.

## Contributors

Momday

## License
This is licensed under the MIT license. (http://opensource.org/licenses/MIT)
