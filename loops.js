// for, while , do while
//for
let counter = 0;
for (let loopVar = 0; loopVar < 5; loopVar++) {
	counter = counter + 1;
	console.log(counter);
} 
//while
counter = 0;
let loopVar = 0;
while (loopVar < 5) {
	console.log(loopVar);
	counter++;
	loopVar++;
	console.log(counter);
} 
counter = 0;
loopVar = 0;
do {
	console.log(loopVar);
	counter++;
	loopVar++;
	console.log(counter);
} 
while (loopVar < 5); 
