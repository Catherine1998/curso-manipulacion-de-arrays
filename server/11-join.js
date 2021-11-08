const elemments = ["fire","air","water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elemments.length; index++) {
    const element = elemments[index];
    rtaFinal = rtaFinal + element + separator; 

}

console.log('for', rtaFinal);

const rta = elemments.join('..');
console.log('for', rtaFinal);
console.log('join', rta);

const title = 'Curso de manipulacion de arrays';
console.log(title.split(' '));


const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal);