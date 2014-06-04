/**
 * Created by paul on 14-5-26.
 */

require.config({
    baseUrl: '/javascripts',
    paths: {
        'jquery': '../vendor/jquery/jquery-1.10.2',
        'bootstrap': '../vendor/bootstrap/js/bootstrap',
        'domReady': '../vendor/require/domReady',
        'angular': '../vendor/angular/angular',
        'angularRoute': '../vendor/angular/angular-route',
        'angularResource': '../vendor/angular/angular-resource',
        'angularAnimate':'../vendor/angular/angular-animate',
        'threadApp':"threads/threadApp",
        'threadApp2':"threads/threadApp2",
        "threadApp3":"threads/threadApp3",
        'menuService':"threads/menuService",
        'threadService':"threads/threadService",
        'bootapp': 'threads/bootapp'

    },
    shim: {
        angular: {'exports': 'angular', 'deps': [ 'jquery', 'bootstrap']},
        angularRoute: {'deps': ['angular']},
        bootstrap: {'exports': 'bootstrap', deps: ['jquery']},
        angularResource: {'deps': ['angular']}
    },
    deps: ['bootapp']
});
define(
    'core',
    [
        'jquery',
        'bootstrap'
    ],
    function ($) {
        // jQuery and bootstrap have been loaded
        return $;
    }
);
require(
    ['core'], function ($) {
            $('[data-toggle=offcanvas]').click(function() {
                $('.row-offcanvas').toggleClass('active');
            });
    }
);
