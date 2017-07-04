//
// index.js
// Created on 2017-07-03 16:40
// Created by sustny(http://sustny.me/)
//

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

var num = 2;

if(num == 1){
  console.log("1")
} else if(num == 2){
  console.log("2")
} else {
  console.log("false")
}

var wise = "futsuu";
switch(wise) {
  case "ikemen":
  console.log("イケメンです");
  break;
  case "iketenai":
  console.log("イケメンではない");
  break;
  case "futsuu":
  console.log("どちらでもない");
  break;
}

var i = 0;
while(i<10) {
  i++;
  console.log("i=" + i);
}

i=0;
do {
  i += 15;
  console.log("i=" + i);
} while(i<150)

for(i=0;i<=100;i+=10) {
  if(i == 30) {
        continue;
    }
  console.log("i="+i);
}

for(var element in hash) {
  console.log(element + " / " +  hash[element]);
}
