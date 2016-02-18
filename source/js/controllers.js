
/**
 * @author Emilio José Plaza de los Reyes Quiroz <emilio@2brains.cl>
 * @license (c) 2016 2Brains SpA. http://2brains.cl
 * License: Private
 */

/**
 * @ngdoc module
 * @name controllers
 * 
 * @description Controllers module
 */
var module = angular.module('miti', [
        'ngResource'
    ]);

/**
 * @ngdoc controller
 * @name ContactCtrl
 * 
 * @description
 *
 * Contact form controller, send data form through rest api endpoint.
 *
 * Validation take place on the Server Side.
 * 
 */
module.controller('ContactCtrl', ['$scope', '$resource', function ($scope, $resource) {
        $scope.sendStatus = "";
        $scope.contactForm = {};

        var Send = $resource('/restmail', {}, {
            send: { method: 'POST' }
        });

        $scope.processForm = function () {
            var data = {};
            //Remove all form errors before go
            angular.forEach($scope.contactForm, function (value, key) {
                value.errors = null;
            });

            $scope.sendStatus = "Enviando...";

            //Build form data to send to endpoint
            angular.forEach($scope.contactForm, function (value, key) {
                if (value.value !== "" &&  value.value !== undefined && value.value !== null) {
                    data[key] = value.value;
                }
            });

            var send = Send.send(data, function(data) {
                $scope.sendStatus = "Mensaje enviado correctamente, gracias por contactarnos.";
                //Clear form
                angular.forEach($scope.contactForm, function (value, key) {
                    value.value = null;
                });
            }, function (response) {
                $scope.sendStatus = "No se ha podido enviar, favor revisar los campos e intentar nuevamente.";

                //Show errors
                angular.forEach(response.data, function (value, key) {
                    if ($scope.contactForm[key] === undefined) $scope.contactForm[key] = {};
                    $scope.contactForm[key].errors = value.join('<br/> *');
                });
            });
        };
    }]);