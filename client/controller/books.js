angular.module('book-store')
.component('books',{

 //    bindings: {
	// 	books:'<'
	// },

	controller: function(){
		this.books=window.BooksData ;
	},


	template: `<ul>
	<book/></ul>`
	
})

// `<ul >
// 	<book ng-repeat="book in $ctrl.books"  
// 	book="book"/></ul>`


	// template: '<div><book/><div>'
