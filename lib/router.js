/**
 * Created by Brew on 10/1/2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
   name: "home"
});