const nubers =[1,30,23,04,30,45];


let rta = true; 

for (let index = 0; index < nubers.length; index++) {
    const element = nubers[index];

    if( element >=40){
        rta = false
    }
    
}

console.log('for', rta); 
const rta2 = nubers.every(item => item <= 40)
console.log('rta2', rta2);


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta3 = team.every(item => item.age < 18)
console.log('rta3', rta3);
