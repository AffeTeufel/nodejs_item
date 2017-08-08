/**
 * Created by AffeTeufel on 2017/8/7.
 */
var util=require('util');
function Parent(){
    this.name='Parent';
    this.age=6;
    this.say=function(){
        console.log('hello',this.name);
    }
}

Parent.prototype.showName=function(){
    console.log(this.name);
};

function Child(){
    this.name='Child';
    this.parent={
        name:'parent'
    }
}

//Child.prototype=new Parent();//->这种方法继承会继承Parent这个类的私有属性,淘汰
//Child.prototype=Object.create(Parent.prototype);//->Object.create（）将括号里的对象作为prototype
util.inherits(Child,Parent);//->Child.prototype=Object.create(Parent.prototype)相当于这句话
var child=new Child();
console.log(child.__proto__.__proto__.__proto__===Object.prototype);

console.log(util.inspect(child,true,0,true));
/*
* 1.child 对象
* 2.参数一 showHidden 是否显示隐藏属性
* 3.参数二 depth  对象递归显示深度
* 4.参数三 colors  是否显示颜色
* */