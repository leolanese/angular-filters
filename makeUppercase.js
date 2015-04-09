
;(function () {
  angular
    .module('myApp')

    .filter('makeUppercase', makeUppercase);

    /* @ngInject */
    function makeUppercase(item) {
      return function (item) {
        return item.toUpperCase();
      };
    }

})();
