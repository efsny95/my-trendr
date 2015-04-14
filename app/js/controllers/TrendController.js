/**
 * Created by LaurencePutterman on 4/9/15.
 */
app.controller('TrendController',['$scope','$filter','$http','TwitterTrendService','locPassService',function($scope, $filter, $http, TwitterTrendService, locPassService){

  var search = 'select * from geo.places where text="'+ locPassService.get().location+'"';
  search = $filter('encodeURIComponent')(search);
  $http({
    method: 'GET',
    url: 'http://query.yahooapis.com/v1/public/yql?q='+search+'&format=json'}).
    success(function(data, status) {
      console.log(data);
      /*var headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      TwitterTrendService.post(function(oauth){
        console.log(oauth);
      });
       TwitterTrendService.get({id: data.query.results.place[0].woeid},function(trends){
        console.log(trends);
     });*/
    }).
    error(function(data, status) {
      console.log(data || "Request failed");
    });

}]);