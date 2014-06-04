/**
 *
 * Created by paul on 14-5-28.
 */

/**
 * bootstraps angular onto the window.document node
 */

define([
    'angular',
    'jquery',
    'domReady!',
    'threadApp3'
], function (angular,$) {
	console.log(angular);
    angular.bootstrap($(document),['threadApp']);
});