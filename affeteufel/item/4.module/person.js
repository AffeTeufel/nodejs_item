/**
 * Created by AffeTeufel on 2017/8/8.
 */
var Person=function(name,age){
    this.name=name;
    this.age=age;
};

Person.prototype.getName=function(){
    console.log(this.name);
};

Person.prototype.setName=function(name){
    this.name=name;
};

Person.prototype.getAge=function(){
    console.log(this.age);
};

Person.prototype.setAge=function(age){
    this.age=age;
};

module.exports=Person;

console.log(module);