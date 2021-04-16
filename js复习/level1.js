let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day."
var pattern1 = /\W+/g;
var pattern2 = / /;
var pattern3 = /\?[a-z]/;
var sTob = str.match(pattern3);
str = str.replace(pattern3,sTob[0][1].toLocaleUpperCase())
var x = str.replace(pattern1," ")
var c = x.replace(pattern2,"'");
var space = x.match(pattern2);
// 'I'm going to take a trip to Daocheng on May Day.'
console.log(c);