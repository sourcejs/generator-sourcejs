'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SpecGenerator = yeoman.generators.Base.extend({
    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Creating new SourceJS Middleware!'));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter short Middleware name (sourcejs-<name>):',
                default: 'middleware'
            },
            {
                type: 'input',
                name: 'title',
                message: 'Enter human readable Middleware title:',
                default: 'My new Middleware'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter Middleware description:',
                default: 'Adds new features to SourceJS.'
            }
        ];

        this.prompt(prompts, function (props) {
            this.name = props.name;
            this.title = props.title;
            this.description = props.description;
            this.author = this.user.git.username;

            done();
        }.bind(this));
    },

    app: function () {
        var folderName = 'sourcejs-' + this.name;

        this.template('_README.md', path.join(folderName, 'README.md'));
        this.template('_package.json', path.join(folderName, 'package.json'));

        this.directory('core', path.join(folderName, 'core'));
    }
});

module.exports = SpecGenerator;