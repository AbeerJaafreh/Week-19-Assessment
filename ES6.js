/* Q1: Convert ES5 to ES6 [2 pt]

1) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age
*/
// 1) WRITE YOUR CODE UNDER THIS LINE

name="Alex";
age=25;
result=`My name is: ${name} and my age is: ${age}`;
console.log(result);




/* 
2)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
  multi:function(a,b){
    return a * b
  }
}
 */
// 2) WRITE YOUR CODE UNDER THIS LINE
food="Fried Chicken"
 color="Blue"
 object={food,
  color=(a,b)=>{
    return a * b
  }
}