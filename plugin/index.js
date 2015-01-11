'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SpecGenerator = yeoman.generators.Base.extend({
    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Creating new SourceJS Plugin!'));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter short Plugin name (sourcejs-<name>):',
                default: 'plugin'
            },
            {
                type: 'input',
                name: 'title',
                message: 'Enter human readable Plugin title:',
                default: 'My new plugin'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter Plugin description:',
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
        this.template('assets/_index.js', path.join(folderName, 'assets/index.js'));
        this.template('assets/css/_main.css', path.join(folderName, 'assets/css/' + this.name + '.css'));

        this.copy('assets/README.md', path.join(folderName, 'assets/README.md'));
        this.directory('core', path.join(folderName, 'core'));
    }
});

module.exports = SpecGenerator;