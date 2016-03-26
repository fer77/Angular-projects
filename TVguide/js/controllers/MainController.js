app.controller('MainController', ['$scope', function($scope) {
  $scope.program = [{
    series: "Sherlock",
    series_img: "http://d2buyft38glmwk.cloudfront.net/media/images/canonical/mast-sherlock3-personality-icon-high-res.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  },
    {
    series: "Arrested Development",
    series_img: "http://i.imgur.com/e0gMdM0.jpg",
    genre: "Comedy",
    season: 3,
    episode: "For British Eyes Only",
    description: "Michael falls for a British woman named Rita while investigating a claim by George Sr. that a British construction firm tricked him into doing business with the Iraqis.",
    datetime: new Date(2005, 08, 26, 19, 00, 00, 00)
  }]
}]);
