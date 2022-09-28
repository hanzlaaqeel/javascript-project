//ques 1

var name1 = 'hanzla';
console.log(`Hello ${name1},would you like to learn pythpn`);
//ques 2

name1 = 'HANZLA';
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

function titleCase(name1) {
    var sentence = name1.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(" "));
    return sentence;
}
titleCase(name1);

//ques 3

var famousPerson = 'Albert Einstein';
var quote = 'A person who never made a mistake nerver tried anything new.'
console.log(`${famousPerson} once said,${quote}`);
//ques 4 

var message = famousPerson + ' ' + 'once said' + ',' + quote;
console.log(message);
//ques 5

name1 = '\thanzla\t\n'
console.log(name1)
console.log(name1.trim());
//ques 6

let x = 2;

x += 6;
console.log(x);
console.log(x -= 0);
console.log(x *= 1);
console.log(x /= 1);
//ques 7

console.log(3 + 5);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2);
//ques 8

let favoriteNumber = 21727217928;
console.log('my favorite number is ' + favoriteNumber);
//ques 9

/*hanzla aqeel today's date is 26 sep
above program tells my favorite number*/

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

//ques 17

let places = ['Makkha', 'Medinah', 'Italy', 'USA', 'Germany'];
console.log(places);
//ques 18

places.sort();
console.log(places);
places.reverse();
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places);
//ques 19

console.log(dinnerInvitation.length);
//ques 20

let anyArr = ['Mountain:K2,Mount Everest', 'Countries:Pakistan,USA', 'Cities:Karachi,New York', 'Languages:Urdu,English'];
console.log(anyArr);
//ques 21

const listOfPlaces = {
    Mountain: 'K2,Mount Everest',
    Countries: 'Pakistan,USA',
    Cities: 'Karachi,New York',
    Languages: 'Urdu,English'
};
console.log(listOfPlaces);
//ques 22
//ques23

let car = 'subaru';
console.log(car === 'subaru');
console.log(car !== 'subaru');
x = 50;
console.log(x > 50);
console.log(x >= 50);
console.log(x === car);
x = '50';
console.log(x == car);
console.log(x === car)
console.log(x != car);
let y = 50;
console.log(x == y)
console.log(x !== y);
//ques 24

let anyName = 'Hanzla'
console.log(anyName === anyName.toLowerCase());
let z = 40;
console.log(x > z);
console.log(x >= z);
console.log(x == z);
console.log(y > 50 && y >= 50)
console.log(y > 50 || y >= 50);

let arr = [2, 3, 18, 20, 30];
const found = arr.find(Element => Element > 10);
console.log(found);
// ques 25

let alien_color = 'green'
if (alien_color == 'green') {
    console.log('player earned five points');
}
if (alien_color === ('red')) {
    console.log('player earned 10 points')
}
//ques 26

if (alien_color === 'green') {
    console.log('player earned five points');
} else {
    console.log('player earned 10 points');
}
if (alien_color === 'yellow') {
    console.log('player earned five points');
} else {
    console.log('player earned 10 points');
}
// ques 27

alien_color = 'red';

if (alien_color === 'red') {
    console.log('player earned 15 points');
}
alien_color = 'yellow'
if (alien_color === 'yellow') {
    console.log('player earned 10 points');
}
alien_color = 'green'
if (alien_color === 'green') {
    console.log('player earned five points');
} else {
    console.log('player did not get a point')
};
//ques 28

let age = 18;
if (age < 2) {
    console.log('person is a baby')
} else if (age == 2 || age < 4) {
    console.log('person is a toddler')
} else if (age == 4 || age < 13) {
    console.log('person is a kid');
} else if (age == 13 || age < 20) {
    console.log('person is a teenager')
} else {
    console.log('person is old');
}
//ques 29

let favoriteFruit = ['Apple', 'mango', 'banana']
if (favoriteFruit.indexOf('Apple') == '0') {
    console.log('I love Apple')
};
if (favoriteFruit.indexOf('mango') == '1') {
    console.log('I love mango')
};
if (favoriteFruit.indexOf('banana') == '2') {
    console.log('I like banana')
};
if (favoriteFruit.indexOf('orange') == '3') {
    console.log('I love orange')
};
if (favoriteFruit.indexOf('banana') == '-1') {
    console.log('I like banana')
};
//ques 30

var username = ['john', 'hanzla', 'danyal', 'admin', 'aliyan'];
if (username.indexOf('admin') == '3') {
    console.log('Hello', username, 'would you like to see a status report');
} else {
    console.log('hello', username, ',thankyou for logging in again')
}
// ques 31

username.splice(0, 5);
console.log(username)
if (username.indexOf('admin') == '3') {
    console.log('Hello', username, 'would you like to see a status report');
} else {
    console.log('we need new user');
}
//ques 32

let currentUser = ['john', 'hanzla', 'danyal', 'admin', 'aliyan'];
let newUser = ['ahsan', 'hanzla', 'muzammil', 'haris', 'aliyan'];

function userExist(currentUser, newUser) {

    for (let i = 0; i < currentUser.length; i++) {

        for (let j = 0; j < newUser.length; j++) {

            if (currentUser[i] === newUser[j]) {
                console.log(true);
            } else {
                console.log(false)
            }
        }
    }
    return false;
}
console.log(currentUser, newUser)
console.log('Enter new username')

userExist = currentUser.some(() => newUser.includes(currentUser))
console.log(userExist, 'user already exist  please enter another username')
//ques 33

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < numArr.length; i++) {
    if (numArr.indexOf(1) == 0) {
        console.log('1st')
    } if (numArr.indexOf(2) == 1) {
        console.log('2nd')
    } if (numArr.indexOf(3) == 2) {
        console.log('3rd')
    } if (numArr.indexOf(4) == 3) {
        console.log('4th')
    } if (numArr.indexOf(5) == 4) {
        console.log('5th')
    } if (numArr.indexOf(6) == 5) {
        console.log('6th')
    } if (numArr.indexOf(7) == 6) {
        console.log('7th')
    } if (numArr.indexOf(8) == 7) {
        console.log('8th')
    } if (numArr.indexOf(9) == 8) {
        console.log('9th')
    }
}
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
//ques 36

function make_shirt(size, message) {
    console.log('I need a', size, 'size shirt');
    console.log('which would say', message);
}
make_shirt('medium', 'I love programmung')
// ques 37
function make_shirt(size = 'large', message = 'I love javscript') {
    console.log(size);
    console.log(message);
}
make_shirt();
make_shirt('small')
//ques 38

function descibe_city(city, country = 'USA') {
    console.log(city, 'is in', country)
}
descibe_city('new york');
descibe_city('LA');
descibe_city('Albany');
//ques 39

function city_country(city, country) {
    console.log(city, ',', country);
}
city_country('"Karachi"', '"Pakistan"')
city_country('"Lahore"', '"Pakistan"')
city_country('"Multan"', '"Pakistan"')
//ques 40

function make_album(artist, title) {
    const albums = {
        artist: artist,
        title: title,
    };
    console.log(albums)
}
make_album('atif aslam', 'aadat')
make_album('weeknd', 'starboy')
make_album('doja cat', 'hot planet')
//ques 41

let magicians = ['haris rauf', 'babar azam', 'sadie sink'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician,)
    }
}
show_magicians(magicians);
//ques 42

function make_great(magicians) {
    for (let great of magicians) {
        console.log(great, 'the great')
    }
}
make_great(magicians)
//ques 44

function make_sandwiches(...items) {
    for (let item of items) {
        console.log('I want some', item, 'on my sandwiches')
    }
}

make_sandwiches('beef', 'lettuce')
make_sandwiches('chicken', 'pepperoni', 'some mustard')

//ques 45

let make_car = (manufacturer, model, ...optionalFeature) => {
    const cars = {
        manufacturer: manufacturer,
        model: model,
        optionalFeature: optionalFeature
    }
    console.log(cars);
}
make_car('honda', 'honda civic 22', 'white')
make_car('chevrolet', 'camaro', 'orange', 'modified')

