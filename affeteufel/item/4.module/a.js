/**
 * Created by AffeTeufel on 2017/8/8.
 */
exports.loaded=function(){
    console.log(module.loaded);
};
console.log('A开始加载');
var b=require('./b');//->这样会造成循环依赖，node.js有一个机制，如果是循环依赖,那么这个b和b里的a是一个不完成的对象,后面的方法不会执行,防止死循环
exports.name='haha';