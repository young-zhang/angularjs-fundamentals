'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            if(form.$valid) {
                window.alert('event saved!');
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        };

    }
);