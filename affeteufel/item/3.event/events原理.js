/**
 * Created by AffeTeufel on 2017/8/7.
 */
function Person(name) {
    this.name = name;
    this._events = {};
    this.isTrue = 'false';
}

Person.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);//->因为对象格式为数组，所以可是使用push方法
    } else {
        this._events[eventName] = [callback];//->让里面的对象格式为eventName:[Function]
    }
};

Person.prototype.once = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
    this.isTrue = 'true';
};

Person.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments, 1);//->把emit的后面参数获取到并以数组格式保存
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function (item) {
        item.apply(self, args);
    });
    if(this.isTrue==='true'){
        this._events[eventName]=[];
    }

};

var p = new Person;
p.once('喝酒', function () {
    console.log('白酒');
});

p.once('喝酒', function () {
    console.log('红酒');
});
p.emit('喝酒');
p.emit('喝酒');

