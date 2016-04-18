/**
 * Created by Dhayyam on 4/18/2016.
 */

var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: "Ben",
            lastName: "Hastings",
            gender: "Male"
        };

        $scope.employee = employee;
    });
