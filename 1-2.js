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


