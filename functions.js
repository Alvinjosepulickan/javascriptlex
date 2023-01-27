/*
The JavaScript engine can execute JavaScript code in two different modes:
    Immediate mode
        As soon as the webpage loads on the browser, JavaScript code embedded inside it, executes without any delay.
    Deferred mode
        Execution of JavaScript code is deferred or delayed until any user action like data input, button click, drop-down selection, etc. takes place.
*/
/*
Types of function
    user-defined functions
    built-in functions
*/
/*
function name(args){
    //statements
}
*/
function multiply(num1, num2) {
    return num1 * num2;
}
/*
invoking function
functionName(args);
*/
console.log(multiply (5,6));




//arrow function
let sayHello=()=>{console.log("Hello world")};
sayHello();
let multiplyNumbers=(a,b)=>{console.log(a*b)};
multiplyNumbers(10,10);

//Function parameters are the variables that are defined in the function definition and the values passed to the function when it is invoked are called arguments.


//Nested function
function addNumber(a,b)
{
    function toUser(a,b) {
        console.log(a);
        console.log(b);
    }
    toUser(a,b);
    console.log(a*b);
}
addNumber(10,50);
console.log(new Date());

/*
JavaScript scopes can be of three types:
    Global scope
    Local scope
    Block scope
*/
/*
Hoisting means all the variable and function declarations wherever they are present throughout the program, gets lifted and declared to the top of the program. 
Only the declaration and not the initialization gets hoisted to the top.
*/
let addValues = (a,b=30) => a+b;
console.log(addValues(35));
