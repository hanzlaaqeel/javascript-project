//ques 44

function make_sandwiches(...items) {
    for (let item of items) {
        console.log('I want some', item, 'on my sandwiches')
    }
}

make_sandwiches('beef', 'lettuce')
make_sandwiches('chicken', 'pepperoni', 'some mustard')