//ques 34

let pizza = ['chicken fajita', 'bbq pizza', 'cheese pizza'];
for (i = 0; i < pizza.length; i++) {
    console.log('I like', pizza[i]);
}
console.log('I like chicken fajita', '\n',
    'I like bbq pizza.', '\n',
    'I like cheese pizza')
console.log('I reall love pizza');
//ques 35

let animal = ['cat', 'dog', 'rabbit'];
for (let animals of animal) {
    console.log(animals);
    console.log(animals, 'would be a great pet')
}
console.log('Any of these animal would make a great pet')