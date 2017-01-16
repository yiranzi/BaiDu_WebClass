/**
 * Created by sun10 on 2017/1/17.
 */
console.log("enter")
var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

function arrayGet(array)
{
    var array2 = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i][1] > 60) {
            array2.push(array[i]    );
        }
    }
    var oLi = document.getElementById("aqi-list");
    var oLis = oLi.getElementsByTagName("li");
    var inner="";
    for(var i=0;i<oLis.length;i++)
    {
        if(i == array2.length)
        {
            break;
        }
        oLis[i].innerHTML = array2[i][0] + "kongqi" + array2[i][1];
    }
}
arrayGet(aqiData);
/*
 在注释下方编写代码
 遍历读取aqiData中各个城市的数据
 将空气质量指数大于60的城市显示到aqi-list的列表中
 */
