var obj ={num:10};

var addToThis = function(a){
   return this.num+a;
}

addToThis.call(obj,1);
console.log(addToThis.call(obj,1));