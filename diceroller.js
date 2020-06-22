// let array1 = []
// let array2 = []
// let array3 = []
// let array4 = []
// let array5 = []
// let array6 = []



// function rolldice() {
//     return Math.ceil(Math.random()*6)
// }
// for(let i =0; i < 3; i++) array1.push(rolldice());

// var sum1 = array1.reduce(function(a,b){
//     return a + b;
// },0);

// rolldice() 
// for(let i =0; i < 3; i++) array2.push(rolldice());

// var sum2 = array2.reduce(function(a,b){
//     return a + b;
// },0);

// rolldice()
// for(let i =0; i < 3; i++) array3.push(rolldice());

// var sum3 = array3.reduce(function(a,b){
//     return a + b;
// },0);

// rolldice()
// for(let i =0; i < 3; i++) array4.push(rolldice());

// var sum4 = array4.reduce(function(a,b){
//     return a + b;
// },0);

// rolldice()
// for(let i =0; i < 3; i++) array5.push(rolldice());

// var sum5 = array5.reduce(function(a,b){
//     return a + b;
// },0);

// rolldice()
// for(let i =0; i < 3; i++) array6.push(rolldice());

// var sum6 = array6.reduce(function(a,b){
//     return a + b;
// },0);



// console.log(array1);
// console.log(sum1);
// console.log(array2);
// console.log(sum2);
// console.log(array3);
// console.log(sum3);
// console.log(array4);
// console.log(sum4);
// console.log(array5);
// console.log(sum5);
// console.log(array6);
// console.log(sum6);



// function rollAttribute() {
//     var attResult = document.getElementById("att");
//     var att = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
//     strResult.innerHTML = att;
//     };



function rollStr() {
var strResult = document.getElementById("str");
var str = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
strResult.innerHTML = str;
};

function rollDex() {
var dexResult = document.getElementById("dex");
 var dex = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
 dexResult.innerHTML = dex;
};

function rollCon() {
var conResult = document.getElementById("con");
var con = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
conResult.innerHTML = con;
};

function rollInt() {
var intResult = document.getElementById("int");
var int = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
intResult.innerHTML = int;
};
    
function rollWis() {
var wisResult = document.getElementById("wis");
var wis = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
wisResult.innerHTML = wis;
};

function rollCha() {
var chaResult = document.getElementById("cha");
var cha = Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1)+Math.floor(Math.random()*6+1);
chaResult.innerHTML = cha;
};

