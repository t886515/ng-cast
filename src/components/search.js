angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<'
  },
  controller: function(youTube, $scope) {
    this.fkthis = function(input) {
      youTube.search(input, this.result);
    };
  }
});