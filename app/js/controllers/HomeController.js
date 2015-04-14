/**
 * Created by LaurencePutterman on 4/9/15.
 */
app.controller('HomeController',['$scope','$location','locPassService', function($scope, $location, locPassService){
  $scope.update = function(user) {
    locPassService.set(user);
    console.log(user);
    $location.path("/submit");
  };
}]);

