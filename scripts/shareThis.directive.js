(function(){
    'use strict';
    angular
        .module('app')
        .directive('shareThis', shareThis);

    function shareThis() {
        var directive = {
            restrict: 'EA',
            scope: {},
            controller: ShareThisCtrl,
            controllerAs: 'vm',
            templateUrl: 'views/shareThis.html'
        };
        return directive;
    }

    ////////////////////////

    function ShareThisCtrl() {
        var vm = this;

        // Link you wish to share (in this case, current URL)
        var currentURL = window.location.href;

        // Configuration objects
        var linkedInObj = {
                shortSummary: 'Some type of short summary of your organization goes here',
                title: 'My Great Organization on LinkedIn'
            },
            mailObj = {
                subject: 'Check out this website!',
                body: 'Check out this site http://google.com/'
            },
            twitterObj = {
                message: 'Check out this website!',
                handle: 'someTwitterHandleWithoutThe@'
            };


        // Generated URLs for Facebook, Google+, LinkedIn, Email, Pinterest, Twitter
        vm.urls = {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + currentURL,

            googlePlus: 'https://plus.google.com/share?url=' + currentURL,

            linkedIn: 'https://www.linkedin.com/shareArticle?mini=true&url=' + currentURL + '&title=' + encodeURI(linkedInObj.title) + '&source=' + currentURL + '&summary=' + encodeURI(linkedInObj.shortSummary),

            mail: 'mailto:?subject=' + encodeURI(mailObj.subject) + '&body=' + encodeURI(mailObj.body),

            pinterest: 'https://www.pinterest.com/pin/create/button/?url=' + currentURL,

            twitter: 'https://twitter.com/intent/tweet/?text=' + encodeURI(twitterObj.message) + '&url=' + currentURL + '&via=' + encodeURI(twitterObj.handle)
        };

    }

})();