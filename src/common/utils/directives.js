angular.module('cf.utils.directives',[])
.directive('cfFilterItem',[
  '$rootScope',
  function($rootScope) {
    return {
      scope: {
        filterParent: '@',
        filterName: '@'
      },
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          element.toggleClass('active');
          $rootScope.$emit('filterItemChange:'+scope.filterParent,{filterName:scope.filterName});
        });
      }
    };
}])
.directive('cfFilter',[
  '$rootScope',
  function($rootScope) {
    return {
      scope: {
        listToFilter: '@',
        filterName: '@',
        filters: '='
      },
      link: function(scope, element, attrs) {
        var state = {};
        _.each(scope.filters, function(f) {
          state[f] = {name:f,active:false};
        });

        $rootScope.$on('filterItemChange:'+scope.filterName,function(event,data) {
          state[data.filterName].active = !state[data.filterName].active;
          $rootScope.$emit('filterChange:'+scope.listToFilter,{filterState:state});
        });
      }
    };
  }
])
.directive('cfCreateTransaction',[
  '$rootScope','transactionsService','$modal',
  function($rootScope,transactionsService,$modal) {
    return {
      link: function(scope, element, attrs) {
        element.on('click', function() {
          $modal.open({
            templateUrl: 'utils/transactionCreationForm.tpl.html',
            size: 'md',
            controller: [
              '$rootScope','$scope','transactionsService',
              function($rootScope,$scope) {
                $scope.createTransaction = function() {
                  transactionsService.create({id:2, transactionType:'INCOME', amount:15000, description: 'Startup Weekend',companyId:1, pending: true, date: new Date().toISOString()});
                  $scope.$close();
                  $rootScope.$emit('filterChange:transactions',{filterState:{}});
                };

              }
            ]
          });
        });
      }
    };
  }
])
;