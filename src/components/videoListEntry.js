angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: 'src/templates/videoListEntry.html',
    bindings: {
      video: '<',
      current: '=',
      onClick: '<'
    },
    controller: function() {
      this.changeCurrentVideo = function(video) {
        this.onClick(video);
      };
    }
  }
);
