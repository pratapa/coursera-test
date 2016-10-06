// (function(){
//
// 'use strict';
// angular.module('LunchCheck',[])
// .controller('LunchCheckController',LunchCheckController);
// LunchCheckController.$inject=['$scope'];
// function LunchCheckController($scope){
//
//     $scope.tellstatus=function(){
//         var flag="";
//         var x=$scope.items;
//         if(!$scope.items)
//             $scope.mymessage="Please enter data first";
//         else {
//                for(var i=0;i<$scope.items.length;i++)
//                  {
//                          if($scope.items[i]==',')
//                              flag=true;
//                   }
//                 if(flag!=true)
//                    flag=false;
//                 if(flag==false)
//                     $scope.mymessage="Enjoy!";
//                 else {
//                     var itemsarray=x.split(",");
//                     var m=itemsarray.length;
//                     var status=sendmessage(m);
//                     }
//                 }
//    };
//   function sendmessage(p)
//   {
//     if(p>3)
//          $scope.mymessage="Too Much";
//     else if ((p>0)&&(p<=3))
//           $scope.mymessage="Enjoy!";
//    };
//  }
// })();


!function(){"use strict";function e(e){function s(s){s>3?e.mymessage="Too Much":s>0&&3>=s&&(e.mymessage="Enjoy!")}e.tellstatus=function(){var t="",n=e.items;if(e.items){for(var o=0;o<e.items.length;o++)","==e.items[o]&&(t=!0);if(1!=t&&(t=!1),0==t)e.mymessage="Enjoy!";else{var i=n.split(","),l=i.length;s(l)}}else e.mymessage="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
