/**
 * Created by AffeTeufel on 2017/8/8.
 */
var fs=require('fs');

/*
* writeFile这个方法也有许多参数
* 1.@path:文件路径
* 2.@data:需要写入的数据
* 3.@options:这里比readFile的方法多了一个属性mode
*   我们在dos系统里对于一个文件是有操作权限的
*   -rwxrwxrwx
*   其中第一个-是文件如果是d是指文件夹
*   rwx也可以用数字7表示 rw-用6表示 r--用4表示 -w-用2表示 --x用1表示
*   r:read 读
*   w:write 写
*   x:execute 执行
* */
fs.writeFile('ini.txt',new Buffer('我是写入的数据'),{encoding:'utf8',flag:'w'},function(err){});