'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile, $parse) {
        $scope.appendDivToElement = function(markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
);