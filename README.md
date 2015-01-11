# Yeoman generator for SourceJS

For [SourceJS](http://sourcejs.com) initialization, bootstraping new Specs, plugins and other platform related items.

```
npm i -g yo grunt-cli generator-sourcejs
cd sourcejs-folder
yo sourcejs
```

Note: before running mentioned commands, please be sure that you have [Git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/download/) installed.

## Commands

```
yo sourcejs
```

Entry point to all commands. Also used for new SourceJS instance initialization.

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

Read more about Plugin development in docs http://sourcejs.com/docs/api/plugins.
