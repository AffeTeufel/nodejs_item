/**
 * Created by AffeTeufel on 2017/8/8.
 */
var buf1=new Buffer(3);//->方法一：规定长度,然后一一赋值
buf1[0]=0x61;
buf1[1]=0x62;
buf1[2]=0x63;

var buf2=new Buffer([0x61,0x62,0x63]);//->方法二:直接将数组存入

var buf3=new Buffer("abc");//->方法三:将想要转化的内容直接放入,可以添加保存内容的类型是utf8还是ascii之类的
// console.log(buf1);
// console.log(buf2);
// console.log(buf3);

var buf4=new Buffer('中国','utf8');//->buffer本质就是将内容转化为2几个8位的2进制数
// console.log(buf4);

//->buffer的copy方法
var srcBuf=new Buffer([4,5,6]);
var tarBuf=new Buffer(6);
tarBuf[0]=1;
tarBuf[1]=2;
tarBuf[2]=3;
srcBuf.copy(tarBuf,3,0,3);
console.log(tarBuf);

//->buffer的write方法
var buf=new Buffer(12);
buf.write('无敌',0,6,'utf8');
buf.write('超人',6,6,'utf8');
console.log(buf);

//->buffer的toString()方法和slice（）方法
var buffer=new Buffer('无敌超人');
var bufA=buffer.slice(0,7);//->slice方法可以截取buffer里的长度
var bufB=buffer.slice(7);//->slice与数组的slice方法区别是会改变原先buffer
console.log(bufA.toString());
console.log(bufB.toString());

//->StringDecoder(字符串解码器),可以暂时缓存与查找slice截取错位的字节
var StringDecoder=require('string_decoder').StringDecoder;
var decoder=new StringDecoder();
console.log(decoder.write(bufA));
console.log(decoder.write(bufB));

//->buffer的concat方法,静态方法,直接在类上使用，不需要实例化
var bufC=new Buffer([1,2,3]);
var bufD=new Buffer([4,5,6]);
var bufE=Buffer.concat([bufC,bufD],6);
console.log(bufE);