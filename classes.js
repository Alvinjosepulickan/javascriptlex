let john={
    name:"John",
    yob:2000,
    age:()=>{ console.log(2023-john.yob)}
};
console.log(john.age());

//classes
class Calculator{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    add(){return this.a+this.b;}
    multiply=()=>{return this.a*this.b;}
    subtract(){return this.a-this.b;}

    //static methods
    static add=(a,b)=>{return a*100000};
}
let calc=new Calculator(10,20);
console.log(calc.add());
console.log(calc.multiply());
console.log(calc.subtract());

console.log(Calculator.add(10,20));






//inheritance
class Vehicle{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    displayA(){console.log(this.a)}
    displayB(){console.log(this.b)}
}
class car extends Vehicle{
    constructor(a,b,c,d) {
        super(a,b);
        this.c=c;
        this.d=d;
    }
    displayA=()=>{super.displayA()}
    displayB=()=>{super.displayB()}
}
var j=new car(1,2,3,4);
j.displayA();
j.displayB();
console.log(j.c);
console.log(j.d);

//Subclassing Built-ins     => extending user defined classes



class Person {
	constructor(name, age) {
		this._pname = name;
		this._page = age;
	}
	display() {

		console.log("name :" + this.pname);
		console.log("age :" + this.page);
	}
	set pname(namePerson) { this._pname = namePerson; }
	get pname() { return this._pname; }
}
let per = new Person();              // line 8
per.pname = "Rexha";                 // line 9
console.log(per.pname);              // line 10
let per1 = new Person("Alex", 10);   // line 11
console.log(per1.pname);             // line 12

