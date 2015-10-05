/**
 * Created by Brew on 10/1/2015.
 */
Template.nav.helpers({
    activeIfTemplateIs: function (template) {
        var currentRoute = Router.current();
        return currentRoute && template === currentRoute.route.options.name ? 'active' : '';
    }
});

Template.nav.events({
    "click #login-dropdown-list" : function(event){
        var collapsed = $('#navbar').hasClass("navbar-collapse collapse");
        var dropdownIsOpen = event.currentTarget.className === 'dropdown';
        if(collapsed) {
            if(dropdownIsOpen){
                $("#loginSpacer").removeClass('visible-xs').addClass('visible-xs');
            } else {
                $("#loginSpacer").removeClass('visible-xs');
            }
        } else {
            $("#loginSpacer").removeClass('visible-xs').addClass('visible-xs');
        }
    }
});
