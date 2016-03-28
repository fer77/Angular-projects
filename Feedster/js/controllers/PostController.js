app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdyKIGj9oji4sjniAmySuK2jxzMEO37rH0SZZqjuSFF5EQYn_q'
      },
      comment: {
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwGOx75BX1czc5SDIlBHC6arIU2xxh1Aojh10ww1CCGvve6hyS',
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QERAQEA4PFQ8VFRIWDhAOEBUPDg8QFh0iFxUSExgYHSggGB8rGxUTIzEhJSktLi4uFx8zODMsNygtLisBCgoKDQ0NGxAQFS0dFSUuKy0tLS04Ky0rKy0tLSstLS0tKys4Li0tLTctNy0rKysrLS0rKysrKysrKysrKysrK//AABEIAGAAYAMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABAUBBgMHAv/EADEQAAIBAgQDBQYHAAAAAAAAAAABAhEhAwQFQTFRcRIiQoGRE1JhgvDxMjNDscHR4f/EABgBAAMBAQAAAAAAAAAAAAAAAAABAwIE/8QAHBEBAQACAgMAAAAAAAAAAAAAAAECMRFRAxIh/9oADAMBAAIRAxEAPwD9EAB0pAAAANHJaY5rtTbUdluzQhpuEvBXq2YucjXrXngeilp2E/AvJsjzWk0VcNuvuu9egTOD1rJB1nDbIAAAAAAVabhKeJFPgrvyJS/RfzPlZnLRzbeABBQAABha1gqM1JeJX6r6Rnmtr36fz/wZJfDSd2AA0QAAAXaMn7StLUdXsiE1NCl3prmk/T7mctHNtkAEFAAAGRrqdYWsu1farp/Rkm1rku5Fc5ft90YpbDSeWwAGyAAACjI4zhOLraqT6MnAqHrQS6fmPaQT3Vn1W5Uc9+KgB8sxi9iMpPZeoBi6vjOWJ2a2jw6viQnZybbb4u7OHRJxEwADIAAAAPpgYLm1FJ7Va2XMA2tGjTD6tl5xI6c9vNVgT5+NcOa+BQBB5IFWpYLjOTo+y3VPa5KdEvKYABkVKMvk8Sf4Y25uyNfKabCF33pc3w8kXE75OmpizMvpEVeb7T5KyNGGGoqiSS5I/oE7bWuAACMAAByUU7PhyZBmNKhK8e6/hdehoActgeczGQxIeGq5xuSnrSXNZGGJxVJe8rP/AE3PJ2zcX//Z'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]
}]);
