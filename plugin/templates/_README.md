# <%= title %>

<%= description %>

[SourceJS](http://sourcejs.com) plugin.

## Install

To install plugin, run npm command in `sourcejs/user` folder:

```
npm install sourcejs-<%= name %> --save
```

Then run Grunt update in SourceJS root:

```
cd ..
grunt update
```

After restarting your app, plugin will be loaded automatically. To disable it, remove npm plugin and run `grunt update` again.

## Other SourceJS plugins

* https://github.com/sourcejs/sourcejs-bubble
* https://github.com/sourcejs/sourcejs-spec-dependencies
* https://github.com/sourcejs/sourcejs-spec-status
* https://github.com/sourcejs/sourcejs-specs-linting