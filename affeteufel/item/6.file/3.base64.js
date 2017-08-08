/**
 * Created by AffeTeufel on 2017/8/8.
 */
/*
 * base64
 * base 是吧3个8位字节 转成4个6位字节 然后在6位字节补前补两个0
 * */

// var buf1=new Buffer('哈','utf8');
// console.log(JSON.parse(JSON.stringify(buf1))["data"].toString());
function base(strDemo) {
    var buf1 = new Buffer(strDemo, 'utf8');
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str += str.toLowerCase();
    str += '0123456789';
    str += '+/';
    var result = '';
    var bufCur1 = '',
        strCur1 = '',
        strCur2 = '',
        strCur3 = '',
        strCur4='';
    for (var i = 0; i < buf1.length; i++) {
        bufCur1 = buf1.slice(i, i + 1);
        strCur1 = parseFloat(JSON.parse(JSON.stringify(bufCur1))["data"].toString());//->将buffer里的数据转化为十进制
        strCur2 += strCur1.toString(2);
    }
    for(i=0;i<strCur2.length;i+=6){
        strCur3=strCur2.slice(i,i+6);
        strCur4 = parseInt(('00' + strCur3), 2);
        result += str[strCur4];
    }
    return result;
}
console.log(base('哈哈'));