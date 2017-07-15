angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, callback) {
    return $http.get(
      'https://www.googleapis.com/youtube/v3/search', 
      { params: {
        maxResults: 10,
        q: query,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        type: 'video'
      }
      }
    )
      .then(
        function(response) {
          callback(response.data.items);
        },
        function(error) {
          console.log('miserable failure');
          console.error(error);
        }
      );
  };
});
