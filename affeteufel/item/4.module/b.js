/**
 * Created by AffeTeufel on 2017/8/8.
 */
exports.loaded=function(){
    console.log(module.loaded);
};
console.log('B开始加载');
var a=require('./a');
console.log('a.name',a.name);