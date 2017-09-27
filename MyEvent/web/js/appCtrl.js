app.controller("mainCtrl", function ($scope) {
    $scope.msg = "I love Main Page";
});
app.controller("aboutCtrl", function ($scope) {
   $scope.aboutInfos=[
       {dateTime:'March 2011',title:'An Agency is Born',message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',imageUrl:'about/1.jpg'},
       {dateTime:'2009-2011',title:'Our Humble Beginnings',message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',imageUrl:'about/2.jpg'},
   ];
});
app.controller("serviceCtrl", function ($scope) {
    $scope.msg = "I love Service Controller Page";
});

/*Slider Controller*/
app.controller('sliderCtrl',function ($scope,$http) {
    $http.get("index.php")
        .then(function (response) {
            $scope.sliders = response.data;
        });
});