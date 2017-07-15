angular.module('video-player')
.service('youTube', function($http) {
  this.searchYouTube = function(params) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: params
    });
  };
});
