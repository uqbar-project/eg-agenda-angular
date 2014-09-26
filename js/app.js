'use strict';

/* Controllers */
var app = angular.module('agendaApp', [])

app.controller('AgendaController', function ($scope) {
	/* scope */
	$scope.contactos = [
	    {
	    	"nombre" : "Juan", 
	    	"apellido" : "Perez", 
	    	"telefono" : "321472352", 
	    	"email" : "juan@gmail.com", 
	    	"direccion" : "Corrientes 1234, 3B"
	    },
	    { "nombre" : "Pablo", "apellido" : "Alvarez", "telefono" : "666", "email" : "juan@gmail.com", "direccion" : "Corrientes 1234, 3B"},
	    { "nombre" : "Maria", "apellido" : "Rodriguez", "telefono" : "47584777", "email" : "juan@gmail.com", "direccion" : "Corrientes 1234, 3B"},
	    { "nombre" : "Andrea", "apellido" : "Garcia", "telefono" : "888890", "email" : "juan@gmail.com", "direccion" : "Corrientes 1234, 3B"}
	];
	
	$scope.textoBusqueda = '';
	
	$scope.filtroActual = '';
	
	$scope.buscar = function() {
		$scope.filtroActual = $scope.textoBusqueda
	}
});
  
  
