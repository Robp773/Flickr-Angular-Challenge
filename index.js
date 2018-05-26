'use strict';

angular.module('root-app', [])
  .controller('MainCtrl', function($http){
    let vm = this;
    this.submitSearch = function(){
      $http.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fb8dd264fab218da95bfb1be0e77ba26&format=json&text=${vm.searchTerm}&nojsoncallback=1`)
        .then(function(res){
          vm.feedback = 'Loading';    
          vm.photoArray = [];
          vm.totalResults = res.data.photos.photo.length;
          for(let i = 0 ; i<50; i++){
            let currentPhoto = res.data.photos.photo[i];            
            vm.photoArray.push(`https://farm${currentPhoto.farm}.staticflickr.com/${currentPhoto.server}/${currentPhoto.id}_${currentPhoto.secret}.jpg`);
          }
          vm.feedback = `${vm.totalResults} results for ${vm.searchTerm}`;          
          vm.searchTerm = '';
        })
        .catch(function(error){
          alert(`Error: ${error}`);
          vm.feedback = '';
        });
    };
  });