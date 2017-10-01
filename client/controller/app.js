angular.module('book-store',[])
.component('app',{
	controller:function(){
      this.books;
      // $http.get('/').then(function(data){
      // 	$scope.books=data.data
      // },
      // function(err){
      // 	console.log(err)
      // })
      this.fetch=function(){
		$.ajax({
			 async: false, 
  		 
             url: "http://localhost:1128/",
              type:'GET',
              dataType: 'json',
              success: function(data){
    		  	this.books=data;
            }, 

        })
       }
    },

 




	template: `<div><search/><books/>
	</div>`
})