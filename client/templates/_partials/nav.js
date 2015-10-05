/**
 * Created by Brew on 10/1/2015.
 */
Template.nav.helpers({
    activeIfTemplateIs: function (template) {
        var currentRoute = Router.current();
        return currentRoute && template === currentRoute.route.options.name ? 'active' : '';
    }
});
