/* <h4>What is the use of setTimeout</h4> */
function Time(){
    console.log('hello world');
}
setTimeout(Time,1000);

function Time(){
    console.log('hello world');
}
setInterval(Time,1000);

// What are arrow functions?
let arrowFunction = ()=>{
    console.log("Arrow Function")
}
arrowFunction();

/* <h4>What is a Temporal Dead Zone?</h4> */
console.log(a)
let a=2;

/* <h4>what is DOM</h4> */
const paragraphs = document.querySelectorAll("h4");
console.log(paragraphs)
let para = document.getElementById("text")
console.log(para)
 let par= document.getElementsByClassName("tree");
 console.log(par)

//  <h4>Difference between undefined vs not defined vs NaN</h4>
console.log(p)
var p=2;  
// undefined

console.log(p)
 p=2;  
//  not defined

var x="50";
var y=10;
var z="hello";
console.log(y/z);
// NaN

/* <h4>What is an event loop and call stack</h4> */
// call stack=>
function greeting() {
    // [1] Some code here
    sayHi();
    // [2] Some code here
  }
  function sayHi() {
    return "Hi!";
  }
  
  // Invoke the `greeting` function
  greeting();
  
  // [3] Some code here

//   event loop

console.log("Before delay");
  
function delayBySeconds(sec) {
   let start = now = Date.now()
   while(now-start < (sec*1000)) {
     now = Date.now();
   }
}
  
delayBySeconds(5);
  
// Executes after delay of 5 seconds
console.log("After delay");