const words = ['spray','limitess','elite'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];

    if(item.length >= 6){
        newArray.push(item);

    }
    
}

console.log('NEWaRRAY', newArray);
console.log('original', words); 
const rta = words.filter(item => item.length >= 6);


console.log('rta', rta);
console.log('original', words); 


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Nicolas",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const rta3 = orders.filter(item => item.delivered && item.total >= 100);
  console.log('rta', rta3);

  
  const search = (query) => {
      return orders.filter(item => {
          return item.customerName.includes(query);
      })
  }

  console.log(search('Nico'));