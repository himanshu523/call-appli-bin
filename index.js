var student ={age:20};

var printAge = function(){
    return this.age;
}

console.log(printAge.call(student));

