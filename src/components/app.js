angular
  .module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.selectVideo = function(video) { this.currentVideo = video; }.bind(this);
      this.searchResults = function() { return 1; };
    }
  }
  
);