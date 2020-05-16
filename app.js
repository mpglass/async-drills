// function sayMessage(message) {
//     console.log(message)
// };
// sayMessage('Hello World')
// setTimeout(function () { sayMessage('2 seconds'); }, 2000);

// function getWords(word) {
//     console.log(word);
// };

// function waitForIt() {
//     getWords('Wait');
//     setTimeout(function () { getWords('for'); }, 3000);
//     setTimeout(function () { getWords('the'); }, 5000);
//     setTimeout(function () { getWords('BOOM!'); }, 6000);
// }

// waitForIt();


// const countdown = (num, callback) => {
    
//     setTimeout(() => {


//         if (num > 0) {
//             console.log(num);
//             countdown(num - 1, callback);
//         }
//         else {
//             callback();
//         }
//     }, 1000);
// }

// const done = () => {
//     console.log('Job\'s done!')
// };

// countdown(5, done);

var lunchTime = true;
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
if lunchTime === true {
    resoleve (lunch, drink);
} else {
    reject(error);
    )
}
    });
};

// const orderMeSomeFood = () => {
//     return new Promise((resolve, reject) => {
      
//     });
//   };