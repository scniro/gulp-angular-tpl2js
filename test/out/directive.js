angular.module('mod').directive('dir', function () {
    return {
        scope: {},
        template: '<span>basic {{ stuff }}</span>',
        link: function (scope, elem, attrs) {
        }
    }
});