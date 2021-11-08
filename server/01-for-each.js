const letters = ['a','b','c'];

for( let i = 0; i < letters.length; i++){
    const elemente = letters[i];
    console.log('for', elemente);
};

letters.forEach(item => console.log('for each',item));
