/**
 * Created by AffeTeufel on 2017/8/7.
 */
var EventEmitter=require('events');
var util=require('util');
function Person(name){
    this.name=name;
}
util.inherits(Person,EventEmitter);
var man=new Person('guozhen');
man.on('吃饭',function(){
    console.log('豆浆');
});
man.addListener('吃饭',function(){//->addListener和on一模一样的方法
    console.log('油条');
});
man.once('喝酒',function(){
    console.log('大米');
});
man.once('喝酒',function(){
    console.log('馒头');
});
man.emit('吃饭');
man.emit('吃饭');
man.emit('喝酒');
man.emit('喝酒');