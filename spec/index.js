'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var SpecGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Creating new SourceJS spec!'));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter short Spec name (folder name):',
                default: 'new-spec'
            },
            {
                type: 'input',
                name: 'title',
                message: 'Enter human readable Spec title:',
                default: 'New Spec title'
            },
            {
                type: 'input',
                name: 'keywords',
                message: 'Enter spec keywords (comma separated)',
                default: 'none'
            }
        ];

        this.prompt(prompts, function (props) {
            this.name = props.name;
            this.title = props.title;
            this.author = this.user.git.username;
            this.keywords = props.keywords === 'none' ? undefined : props.keywords;

            done();
        }.bind(this));
    },

    app: function () {
        this.template('_index.src', path.join(this.name, 'index.src'));
        this.template('_info.json', path.join(this.name, 'info.json'));
    }
});

module.exports = SpecGenerator;