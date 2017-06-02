angular.module('alurapic').controller('FotoController', function($scope, $http){

	$scope.foto = [];

	$http.get('v1/fotos/new')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});
});