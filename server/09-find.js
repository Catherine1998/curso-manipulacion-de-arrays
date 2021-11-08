const nubers =[1,30,23,04,30,45];


let rta = undefined; 

for (let index = 0; index < nubers.length; index++) {
    const element = nubers[index];

    if( element === 3900){
        rta = element;
        break;
    }
    
}

console.log('for', rta);

const rta2 = nubers.find(item => item === 3860)
console.log('find', rta2);



const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  
  const rta3 = products.find(item => item.id === '🥞')
  console.log('find', rta3);


  const rta4 = products.findIndex(item => item.id === '🥞')
  console.log('findIndex', rta4);