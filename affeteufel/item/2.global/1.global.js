/**
 * Created by AffeTeufel on 2017/8/7.
 */
/*
* 1.global==window全局变量属性
* 和浏览器环境有区别
* console.log(this)//->输出的不是global而是exports（对外接口）这个对象
* 2.module 当前模块对象
* 3.exports 导出对象
* 4.require 加载模块的方法
* 5.__dirname 当前模块所在的目录绝对路径
* 6.__filename 当前模块的绝对路径
* */

console.trace();//显示当前调用的堆栈