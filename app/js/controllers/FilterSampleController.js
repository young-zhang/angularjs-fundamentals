'use strict';

eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter /* name of the filter followed by Filter */) {
        $scope.data = {};

        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);

    }
);
