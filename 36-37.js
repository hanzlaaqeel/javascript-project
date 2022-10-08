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