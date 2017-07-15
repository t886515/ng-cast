angular
  .module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      
      this.selectVideo = function(video) {
        this.currentVideo = video;
      }.bind(this);

      this.searchResults = function(response) {
        this.videos = response;
        this.currentVideo = response[0];
      }.bind(this);
      
      this.result = function(input) {
        youTube.search(input, this.searchResults);
      }.bind(this);
      
      this.result('lonely island');
    }
  }
  
);