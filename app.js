function sayMessage(message) {
    console.log(message)
};
sayMessage('Hello World')
setTimeout(function () { sayMessage('2 seconds'); }, 2000);

function getWords(word) {
    console.log(word);
};

// setTimeout(function(){ alert("Hello"); }, 3000);
function waitForIt() {
    getWords('Wait');
    setTimeout(function () { getWords('for'); }, 3000);
    setTimeout(function () { getWords('the'); }, 5000);
    setTimeout(function () { getWords('BOOM!'); }, 6000);
}

waitForIt();

function done() {
    console.log('Job\'s done!');
};

function countdown(num) {
    if (num > 0) {
        console.log(num);
        countdown(num - 1);
    }
    else {
        console.log(done());
    }
};