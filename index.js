//
// index.js
// Created on 2017-07-03 16:40
// Created by sustny(http://sustny.me/)
//

/*
var sumNum = function(n1, n2, n3) {
  var sum = n1 + n2 + n3;
  return sum;
}

var total = sumNum(1, 3, 5);
console.log(total);

var msg = "Global";

var message = function() {
  var msg = "Private";
  console.log(msg);
}

console.log(msg);
message();

var array1 = new Array(3);
var array2 = [3];

console.log("1: " + array1 + " 2: " + array2); //[実行結果]1: ,, 2: 3

var hash = {'name':'Koji Tadokoro', 'age':24, 'status':'Gakusei'};
console.log(hash['name']);
console.log(hash['age']);
console.log(hash['status']);

delete hash['name'];
console.log(hash['name']); //ここだけ消える
console.log(hash['age']);
console.log(hash['status']);

hash.name = 'YJSNPI';
console.log(hash['name']); //ここが増える
console.log(hash['age']);
console.log(hash['status']);

console.log(hash); //[実行結果]{age: 24, status: "Gakusei", name: "YJSNPI"}

*/

var num = 2;

if(num == 1){
  console.log("1")
} else if(num == 2){
  console.log("2")
} else {
  console.log("false")
}

var animal = "cat";
switch(animal){
    case "cat":
        console.log("猫です。");
        break;
    case "dog":
        console.log("犬です。");
        break;
    case "rabbit":
        console.log("うさぎです。");
        break;
    case "mouse":
         console.log("ネズミです。");
        break;
    case "lion":
        console.log("ライオンです。");
        break;
    default:
        console.log("動物ではありません。");
        break;
}
