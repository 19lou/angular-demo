/**
 *
 * Created by paul on 14-5-28.
 */

/**
 * bootstraps angular onto the window.document node
 */

define([
    'angular',
    'core',
    'domReady!',
    'threadApp'
], function (angular,$) {
	
    angular.bootstrap($(document),['threadApp']);
});