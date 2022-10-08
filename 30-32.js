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