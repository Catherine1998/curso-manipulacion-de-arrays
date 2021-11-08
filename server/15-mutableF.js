const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === '🍔');

if(productIndex !== -1){
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}


console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));



const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞', 
    changes:{
        price: 200,
        description: 'delicioso'
    }
}

const productIndex2 = products2.findIndex(item => item.id === update.id );

products2[productIndex2] = {
    ...products2[productIndex2],
    ...update.changes,
}

console.log(products2);


const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();



const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);


const array2 = [{age: 1}, {age:2}]; 
const rta2 = array2.map(item => {   
  item.name = 'My name';
  return item; 
})
console.log(rta2);