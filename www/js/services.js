angular.module('starter.services', [])

.factory('HeadCircumference', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var circumferenceTbl= [];

  return {
    get: function(id) {
      for (var i = 0; i < circumferenceTbl.length; i++) {
        if (circumferenceTbl[i].id === parseInt(id)) {
          return circumferenceTbl[i];
        }
      }
      return null;
    }
  };
});
