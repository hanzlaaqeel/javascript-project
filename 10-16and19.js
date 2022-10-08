//ques 10

let names = ['Aliyan', 'Usman', 'Affan'];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// ques 11

console.log('Greetings', names[0]);
console.log('Greetings', names[1]);
console.log('Greetings', names[2]);
//ques 12

let favoriteTransportation = ['motorcycle', 'car', 'jetplane'];
console.log('I would like to own a mitsubushi', favoriteTransportation[0]);
console.log('I would like to own a Audi', favoriteTransportation[1]);
console.log('I would like to own a', favoriteTransportation[2]);
//ques 13

let dinnerInvitation = ['Aliyan', 'Affan', 'Muzammil'];
console.log('I would to have on dinner', dinnerInvitation[0]);
console.log('I would to have on dinner', dinnerInvitation[1]);
console.log('I would to have on dinner', dinnerInvitation[2]);
//ques 14

console.log('I just hear the new that', dinnerInvitation[2], 'can"t make it to dinner');
dinnerInvitation.splice(2, 1, 'Areeba');
console.log(dinnerInvitation);
console.log('I would to have on dinner', dinnerInvitation[0]);
console.log('I would to have on dinner', dinnerInvitation[1]);
console.log('I would to have on dinner', dinnerInvitation[2]);
//ques 15

console.log('I just learn that i"m going to have a new table which is bigger')
dinnerInvitation.unshift('Yamna');
console.log(dinnerInvitation);
dinnerInvitation.splice(2, 0, 'Haris');
console.log(dinnerInvitation);
dinnerInvitation.push('Ahsan');
console.log(dinnerInvitation);
console.log('I would to have on dinner', dinnerInvitation[0]);
console.log('I would to have on dinner', dinnerInvitation[1]);
console.log('I would to have on dinner', dinnerInvitation[2]);
console.log('I would to have on dinner', dinnerInvitation[3]);
console.log('I would to have on dinner', dinnerInvitation[4]);
console.log('I would to have on dinner', dinnerInvitation[5]);
//ques 16

console.log('sorry guys the table won"t arrive in time so I can have only two over for dinner');
console.log('sorry I can"t have you on dinner', dinnerInvitation.pop());
console.log('sorry I can"t have you on dinner', dinnerInvitation.pop())
console.log('sorry I can"t have you on dinner', dinnerInvitation.pop())
console.log('sorry I can"t have you on dinner', dinnerInvitation.pop())

console.log('You are still invited on dinner', dinnerInvitation[0]);
console.log('You are still invited on dinner', dinnerInvitation[1]);
dinnerInvitation.pop();
dinnerInvitation.pop();
console.log(dinnerInvitation);
//ques 19

console.log(dinnerInvitation.length);