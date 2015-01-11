'use strict';

define([
    'jquery',
    'sourceModules/module',
    'sourceModules/css'
], function ($, module, css) {
    var moduleCss = new css('/node_modules/sourcejs-<%= name %>/assets/css/<%= name %>.css');

    // Plugin constructor
    function <%= name.charAt(0).toUpperCase() + name.slice(1) %>() {
    }

    <%= name.charAt(0).toUpperCase() + name.slice(1) %>.prototype = module.createInstance();
    <%= name.charAt(0).toUpperCase() + name.slice(1) %>.prototype.constructor = <%= name.charAt(0).toUpperCase() + name.slice(1) %>;

    <%= name.charAt(0).toUpperCase() + name.slice(1) %>.prototype.method = function () {
    };

    return new <%= name.charAt(0).toUpperCase() + name.slice(1) %>();
});