/**
 * Created by LaurencePutterman on 4/9/15.
 */
app.factory('YahooLocService', ['$http', function($http) {
  return {
    loc: function(user) {

     return $http.get("http://where.yahooapis.com/v1/places.q('" + user.location + "')?appid=QsrKH07g")
        .success(function(data) {
          return data;
        })
        .error(function(err) {
          return err;
        });
    }
  };
}]);



