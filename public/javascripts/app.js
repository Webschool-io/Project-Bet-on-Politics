app.controller('VotacaoCtrl', ['$scope','mySocket','$http', ($scope,mySocket,$http)=>{
	mySocket.on('connect', ()=>{
		console.log('conectado')
	});
	mySocket.on('contador', (contador)=>{
		$scope.contador = contador;
		
	});
}]);
