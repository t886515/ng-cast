angular.module('video-player')
  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      videos: '<',
      video: '='
    },
    controller: function() {
      this.getURL = function() {
        return this.video ? 'https://www.youtube.com/embed/' + this.video.id.videoId : 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      };
    } 
  }
);
