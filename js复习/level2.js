//第一个
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i,",");
    }, 1000);
}
console.log(i,"->");

//第二个
// var output = function (i) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// };
// for (var i = 0; i < 5; i++) {
//     output(i);  // 这里传过去的 i 值被复制了
// }
// console.log(i);

//第三个
// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(new Date, i);
//         }, 1000 * i);
//     })(i);
// }
// setTimeout(function() {
//     console.log(new Date, i);
// }, 1000 * i);