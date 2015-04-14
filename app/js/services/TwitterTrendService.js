/**
 * Created by LaurencePutterman on 4/9/15.
 */
app.factory('TwitterTrendService', ['$resource', '$http', function($resource, $http) {
  var consumerKey = encodeURIComponent('N2f3qfrnRRqZMhMHOxkQkrI1E');
  var consumerSecret = encodeURIComponent('E0gJIiBuVcB4Ea5QrFQCwvM6GuSPDedSEWa9Y2rGaHwnhdV33p');
  var credentials = window.btoa(consumerKey + ':' + consumerSecret);
  /*return $resource("https://api.twitter.com",{},{
    get: {
      url: 'https://api.twitter.com/1.1/trends/place.json?id=:id',
      method: 'GET'
    },
    post: {
      url: 'https://api.twitter.com/oauth2/token',
      method: 'POST',
      params: {"grant_type":"client_credentials"},
      headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', grant_type:'client_credentials'}
    }
  });*/
  var twitterOauthEndpoint = $http.post(
    'https://api.twitter.com/oauth2/token'
    , "grant_type=client_credentials"
    , {headers: {
        'Authorization': 'Basic ' + credentials,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
  );
  twitterOauthEndpoint.success(function (response) {
    // a successful response will return
    // the "bearer" token which is registered
    // to the $httpProvider
    console.log(response);
    app.$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
  }).error(function (response) {
    // error handling to some meaningful extent
  })

}]);