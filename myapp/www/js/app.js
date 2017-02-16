var app=angular.module('Todo', ['ionic'])
console.log(app)
app.controller('TodoCtrl',['$scope',function($scope){
		$scope.cuiya='wobuzhidao';
		$scope.items=[
			{name:'tom'},{name:'jerry'}
		]
		$scope.wocao=function(){
			console.log($scope.name=="")
		}
}])
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
      .state('tabs', {
          url: "/tab",
          abstract: false,
          templateUrl: "templates/tabs.html",
      })
      .state('tabs.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "templates/home.html"
            }
          }
      })
      .state('tabs.facts', {
          url: "/facts",
          views: {
            'home-tab': {
              templateUrl: "templates/facts.html"
            }
          }
      })
      .state('tabs.about', {
          url: "/about",
          views: {
            'about-tab': {
              templateUrl: "templates/about.html"
            }
          }
      })
   $urlRouterProvider.otherwise("/tab/home");
}])
