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

Router.route("/admin", {
    name: "admin",
    template: "admin",
    onBeforeAction: function(){
        var currentUser = Meteor.user();
        if(Roles.userIsInRole(currentUser, ['Administrator'])){
            this.next();
        } else {
            this.render("home");
        }
    }

});