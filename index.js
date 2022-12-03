var obj ={num:10};

var addToThis = function(a,b,c){
   return this.num+a+b+c;
}

var bound =addToThis.bind(obj);
bound(1,2,3);
console.log(bound(1,2,3));