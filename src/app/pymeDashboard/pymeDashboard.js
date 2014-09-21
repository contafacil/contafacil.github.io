angular.module( 'cf.pymeDashboard', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'pyme-dashboard', {
    url: '/pyme-dashboard',
    views: {
      'main': {
        templateUrl: 'pymeDashboard/pymeDashboard.tpl.html'
      }
    },
    data:{ pageTitle: 'Dashboard' }
  });
})

.controller( 'PymeDashboardCtrl', [
  '$scope','usersService','$location', 'transactionsService','$rootScope',
  function( $scope, usersService, $location, transactionsService,$rootScope ) {



}])

;