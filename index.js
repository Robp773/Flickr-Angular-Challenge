'use strict';

angular.module('root-app', [])
  .controller('MainCtrl', function(){
    let vm = this;
    this.submitSearch = function(){
      console.log(vm.searchTerm);
    };
  });