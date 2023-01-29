//-------------states of the object--------- 
let myCar = {
    name: "Fiat",
    model: "VXI",
    color: "red",
    numberOfGears: 5,
    currentGear: 3,
    currentSpeed: 45,
    //-------------Behaviour of the object--------- 
    accelerate: function (speedCounter) {
        this.currentSpeed = this.currentSpeed + speedCounter;
        return this.currentSpeed;
    },
     
    brake: function (speedCounter) {
        this.currentSpeed = this.currentSpeed - speedCounter;
        return this.currentSpeed;
    }
}
console.log(myCar.accelerate(10));




let name="Arnold";
let age=65;
let country="USA";
let obj={name,age,country};
obj.place="pala";
obj["sthalam"]="pala";
console.log(obj.place);
console.log(obj.sthalam);




//combiing object
let candidateSelected={
	Name:'Rexha Bebe',
	Qualification:'Graduation',
};
let SelectedAs={
	jobTitle:'System Engineer',
	location:'Bangalore'
};
let employeeInfo={
	...candidateSelected,
	...SelectedAs
};
console.log(employeeInfo);
/*
{
  Name: 'Rexha Bebe',
  Qualification: 'Graduation',
  jobTitle: 'System Engineer',
  location: 'Bangalore'
} 
*/


//accessing object properties
objectName.key = value;
//OR
objectName[key] = value; 

    

