"USER STRICT";
var app = angular.module('app',['btford.socket-io'])

.factory('mySocket', function (socketFactory) {
  return socketFactory();
});