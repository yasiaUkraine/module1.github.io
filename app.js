(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.answer="";
  $scope.text="";
  $scope.class;
    
  $scope.displayAnswer = function () {
    var array =$scope.text.split(',');
    for(let i=0; i<array.length; i++){
        if(array[i]==" " || array[i]==""){
            array.splice(i, 1);
        }
    }

      if(array.length==0){
          $scope.answer="Please enter data first";
          $scope.class="textRed";
      }else if(array.length<=3 && array.length>0){
          $scope.answer="Enjoy!";
          $scope.class="textGreen"
      }else if(array.length>=4){
          $scope.answer="Too much!";
          $scope.class="textGreen"
      }
  };

}

})();