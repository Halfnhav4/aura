/**
 * @fileOverview Extend the aura-core facade
 * @todo This is a stupid place to include jquery ui
 */
/*global define*/
define(["aura_sandbox", "core", "perms", 'jquery_ui'],
    function (sandbox, core, perms) {

        var facade = Object.create(sandbox);

        facade.data.Store = core.data.Store;
        facade.mvc = {};
        facade.mvc.View = function (view) {
            return core.mvc.View.extend(view);
        };
        facade.mvc.Model = function (model) {
            return core.mvc.Model.extend(model);
        };
        facade.mvc.Collection = function (collection) {
            return core.mvc.Collection.extend(collection);
        };        

        return facade;
});
