var obj ={num:10};

var arr=[1,2,3];
var addToThis = function(a,b,c){
   return this.num+a+b+c;
}

addToThis.apply(obj,arr);
console.log(addToThis.apply(obj,arr));