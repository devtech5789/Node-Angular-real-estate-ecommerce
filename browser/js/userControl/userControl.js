app.config(function ($stateProvider) {

    $stateProvider.state('users', {
        url: '/users',
        controller: 'UserController',
        templateUrl: 'js/userControl/templates/userControl.html',
        resolve: {
          allUsers: function(UserFactory) {
            return UserFactory.fetchAll();
          }
        }
    });
});


app.controller('UserController', function ($scope, allUsers, UserFactory) {
  $scope.users = allUsers;

  $scope.toggleAdmin = function(userId, adminStatus, index) {
    UserFactory.changeAdmin(userId, !adminStatus)
      .then(() => {
        $scope.users[index].isAdmin = !adminStatus;
      })
      .catch(console.error('Error in setting admin'))
  }

  $scope.deleteUser = function(userId, index) {
    console.log('I was clicked!!');
    UserFactory.delete(userId)
    .then(function () {
      $scope.users.splice(index, 1);
    })
    .catch(console.error('Error in deleting user'))
  }

});
