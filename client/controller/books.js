angular.module('book-store')
.component('books',{
 
   bindings: {
		books:'<'
	},

	controller: function(){
      
		
	},
	template:  `<ul >
   	<book ng-repeat="book in $ctrl.books" book='book'/></ul>`


	// template: '<div><book/><div>'

	
})

