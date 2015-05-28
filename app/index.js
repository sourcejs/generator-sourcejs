'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var rimraf = require('rimraf');

var conf =  {
    repoUser: 'sourcejs',
    repoSource: 'Source',
    repoSourceBranch: '0.5.3-no-jsdom',
    repoInit: 'init',
    repoInitBranch: 'master'
};

var SourcejsGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
        this.cleanName = this.pkg.name.replace('generator-','');

        this.currentAction = this.arguments[0];

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the SourceJS generator!'));
    },

    actionList: function () {
        if (this.arguments.length === 0) {
            var done = this.async();

            var prompts = [
                {
                    type: 'list',
                    name: 'actionsList',
                    message: 'Which action would you like to perform?',
                    choices: [
                        {
                            'name': 'Init SourceJS in this folder',
                            'value': 'init'
                        },
                        {
                            'name': 'Create Spec in new folder',
                            'value': 'spec'
                        },
                        {
                            'name': 'Create SourceJS Plugin in new folder',
                            'value': 'plugin'
                        },
                        {
                            'name': 'Create SourceJS Middleware in new folder',
                            'value': 'middleware'
                        }
                    ]
                }
            ];

            this.prompt(prompts, function (props) {
                this.actionsList = props.actionsList;

                this.currentAction = this.actionsList;

                done();
            }.bind(this));
        }
    }
});



/*
*
* Sub-generators
*
* */

SourcejsGenerator.prototype.createSpec = function (cb) {
    if (this.currentAction === 'spec') {
        cb = typeof cb === 'function' ? cb : function(){};

        this.spawnCommand('yo', ['sourcejs:spec'])
            .on('close', function (code) {
                cb();
            });
    }
};

SourcejsGenerator.prototype.createPlugin = function (cb) {
    if (this.currentAction === 'plugin') {
        cb = typeof cb === 'function' ? cb : function(){};

        this.spawnCommand('yo', ['sourcejs:plugin'])
            .on('close', function (code) {
                cb();
            });
    }
};

SourcejsGenerator.prototype.createMiddleware = function (cb) {
    if (this.currentAction === 'middleware') {
        cb = typeof cb === 'function' ? cb : function(){};

        this.spawnCommand('yo', ['sourcejs:middleware'])
            .on('close', function (code) {
                cb();
            });
    }
};



/*
*
* Init
*
* */

SourcejsGenerator.prototype.askForServe = function (cb) {
    if (this.currentAction === 'init') {
        var done = this.async();

        var prompts = [
            {
                type: 'confirm',
                name: 'runSource',
                message: 'Run SourceJS server after install?',
                default: false
            }
        ];

        this.prompt(prompts, function (props) {
            this.runSource = props.runSource;

            done();
        }.bind(this));
    }
};

SourcejsGenerator.prototype.initSource = function () {
    if (this.currentAction === 'init') {
        var done = this.async();
        var _this = this;

        this._getSource(function(){
            _this.depsNeeded = true;

            done();
        });
    }
};



/*
*
* Lib
*
* */

SourcejsGenerator.prototype.installDeps = function () {
    if (this.depsNeeded) {
        var done = this.async();
        var _this = this;

        this.npmInstall(null, null, function () {
            // Copy first Spec from docs/stating
            _this.spawnCommand('cp',['-R','docs/starting','user/specs/starting']);

            if(_this.runSource) {
                _this._serve();

                done();
            }
        });
    }
};


/*
*
* Util methods
*
* */

SourcejsGenerator.prototype._getSource = function (cb) {
    var _this = this;

    this.log.writeln('Cloning SourceJS');
    this.spawnCommand('git',['clone','-b', conf.repoSourceBranch, 'https://github.com/'+conf.repoUser+'/'+conf.repoSource, '.'])
        .on('close', function (code) {
            if (code === 0) {
                _this._getSourceInit(function(){
                    cb();
                });
            } else {
                _this.log.writeln('Error cloning repo');
            }
        });
};

SourcejsGenerator.prototype._getSourceInit = function (cb) {
    var _this = this;

    // Removing cache, for clean git clone
    this.log.writeln('Cleaning cache for github repo:' + conf.repoInit);
    rimraf.sync(path.join(this.cacheRoot(), this.cleanName, conf.repoInit));

    this.remote(conf.repoUser, conf.repoInit, conf.repoInitBranch, function (err, remote) {
        remote.directory('.', 'user');

        if (typeof cb === 'function') cb();
    });
};

SourcejsGenerator.prototype._serve = function () {
    this.spawnCommand('node', ['app']);
};

module.exports = SourcejsGenerator;