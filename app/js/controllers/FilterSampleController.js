'use strict';

eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, $filter) {
        $scope.data = {};

        var durations = $filter('durations');

        $scope.data.duration1 = durations(1);
        $scope.data.duration2 = durations(2);
        $scope.data.duration3 = durations(3);
        $scope.data.duration4 = durations(4);

    }
);
