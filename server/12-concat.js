const elements = [1,2,3,4];
const otherElements = [3,4,5,3,2]; 


const newArray = [...elements]; 

for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}

console.log('for',newArray);


const rta = elements.concat(otherElements);
console.log('concat', rta);