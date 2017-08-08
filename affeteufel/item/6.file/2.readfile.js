/**
 * Created by AffeTeufel on 2017/8/8.
 */
var fs=require('fs');
/*
*readFile这个方法的完成参数
*1.@path :文件路径
*2.@options:Object
*   其中encoding 文件的编码
*   另外flag有很多的参数,其中
*   r:只读
*   rs:只读、同步
*   w:清除文件后创建、只写
*   rw:读写
*   等等。。。
*3.@callback:回调函数
*   回调函数里有两个参数:
*   err:错误信息
*   data:读的数据
* */
var data=fs.readFile('ini.txt',{encoding:'utf8',flag:'r'},function(err,data){//->err是错误信息,data是读取的内容
    console.log(data);
});//->如果使用同步方法readFileSync没有回调函数这个参数