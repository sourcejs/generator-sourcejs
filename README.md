# Yeoman generator for SourceJS

[![npm version](https://badge.fury.io/js/generator-sourcejs.svg)](https://www.npmjs.com/package/generator-sourcejs)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/sourcejs/Source)

For [SourceJS](http://sourcejs.com) initialization, bootstraping new Specs, plugins and other platform related items. Soon will be replaced by `sourcejs-cli` ([source#144](https://github.com/sourcejs/Source/issues/144)).

```
npm i -g yo generator-sourcejs
cd sourcejs-folder
yo sourcejs
```

Note: before running mentioned commands, please be sure that you have [Git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download/) installed.

## Commands

```
yo sourcejs
```

Entry point to all commands. Also used for new SourceJS instance initialization.

### Options

```
yo sourcejs --branch 0.5.3-dev
```

* `repo` - set repo name from where clone SourceJS
* `branch` - set branch
* `repo-user` - set repo owner (github.com/user/repo)
* `init-repo` - set init repo from where to clone new `user` folder
* `init-branch` - set init repo from where to clone new `user` folder

### Create new Spec

```
yo sourcejs:spec
```

Creates new Spec page in current folder. Recommended path to run this command - `sourcejs/user/specs`.

### Create new Plugin and Middleware

```
yo sourcejs:plugin
yo sourcejs:middleware
```

Creates new SourceJS plugin. Run this command in any folder outside `sourcejs`. Then use `npm link` ([docs](https://docs.npmjs.com/cli/link)) to install new plugin to your SourceJS instance.

Read more about Plugin development in docs [http://sourcejs.com/docs/api/plugins](http://sourcejs.com/docs/api/plugins).
