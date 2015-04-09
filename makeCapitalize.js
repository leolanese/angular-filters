;(function() {
  angular
    .module('myApp')

    .filter('makeCapitalize', makeCapitalize);
    
    /* @ngInject */
    function makeCapitalize(){  
      return function(input){
        if(input.indexOf(' ') !== -1){
          var inputPieces,
              i;
    
          input = input.toLowerCase();
          inputPieces = input.split(' ');
          for(i = 0; i < inputPieces.length; i++){
            inputPieces[i] = capitalizeString(inputPieces[i]);
          }
          return inputPieces.toString().replace(/,/g, ' ');
          
        } else {
          input = input.toLowerCase();
          return capitalizeString(input);
        }
    
        function capitalizeString(inputString){
          return inputString.substring(0,1).toUpperCase() + inputString.substring(1);
        }
        
      };
      
    })();
