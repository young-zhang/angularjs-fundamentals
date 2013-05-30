'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
        	console.log('$scope.getGravatarUrl() called');
        	return gravatarUrlBuilder.buildGravatarUrl(email);
        }
    }
);