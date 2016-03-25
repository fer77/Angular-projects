app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'http://i.imgur.com/89Gr8pq.jpg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'http://i.imgur.com/e4rVtxm.jpg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'http://i.imgur.com/XAy1YH2.jpg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'http://i.imgur.com/4aVqAo7.jpg',
      name: 'Rows',
      count: 8
    },
    {
      icon: 'http://i.imgur.com/6TJEn0j.jpg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'http://i.imgur.com/qNsPppE.jpg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'http://i.imgur.com/6NsxRpR.jpg',
      name: 'Sit Ups',
      count: 20
    }
  ];

  $scope.increase = function(index) {
  	$scope.exercises[index].count += 1;
	};
  $scope.decrease = function(index) {
  	$scope.exercises[index].count -= 1;
  };

}]);
