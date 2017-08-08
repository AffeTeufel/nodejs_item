/**
 * Created by AffeTeufel on 2017/8/8.
 */
function concat(list,length){
    var ary=[];
    for(var i=0;i<list.length;i++){
        for(var j=0;j<list[i].length;j++){
            ary.push(list[i][j]);
        }
    }
    var result=ary.slice(0,length);
    return result;
}

var ary1=[1,2,3];
var ary2=[4,5,6];
console.log(concat([ary1,ary2],4));