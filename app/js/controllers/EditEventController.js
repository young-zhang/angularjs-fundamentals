'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            console.log('$scope.saveEvent()');
            if(form.$valid) {
                console.log('$scope.saveEvent() - form valid, saving...');
                eventData.save(event)
                    .then(
                        function(response) { console.log('success', response); },
                        function(response) { console.log('failure', response); }
                    );
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };

    }
);