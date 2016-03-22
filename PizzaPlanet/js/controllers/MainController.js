app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'The Hawaiian',
      description: 'Mozzarella, ham, and pineapple',
      price: 7.00
    },
    {
      name: 'The supreme',
      description: 'Everything in the store',
      price: 8.00
    },
    {
      name: 'The $5 dollar',
      description: 'Mozzarella, pepperoni',
      price: 5.00
    }
  ];

  $scope.extras = [
    {
      name: 'Extra cheese',
      price: 0.50
    },
    {
      name: 'Extra sauce',
      price: 0.25
    },
    {
      name: 'Extra toppings',
      price: 1.00
    }
  ];

}]);
