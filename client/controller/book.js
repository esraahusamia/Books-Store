angular.module('book-store')
.component('book',{
	// bindings: {
	// 	book:'<'
	// },


	// controller: function(){
	// 	this.book=window.BooksData[0] ;
	// },

	template: `<li style="margin-left: 250px;margin-top: 20px ">
	
	<img style="width: 200px ;height = 200px " ng-src='../data/python.jpe' />
	</div>
	<div>
	<div style="margin-top: 20px ">
	title: Get the entire “IT & Programming” category
	</div>
	
	<div style="margin-top: 20px "><button> downlode  </button> <div>
	</div>
	</li>`
})

 // `<li >

	// <img ng-src={{$ctrl.book.img_url}} />
	// </div>
	// <div>
	// <div >
	// {{$ctrl.book.title}}
	// </div>
	// <div >{{$ctrl.book.description}}</div>
	// </div>
	// </li>`