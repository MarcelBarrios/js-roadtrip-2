// EVideo 2.1 accompanies this exercise

// The Flappy National Park would like to print specific messages depending
// on whether the park is open or closed.
//
// They’ve asked you to modify their code to print one of the following
// messages depending on the boolean value (true or false) of the variable
// parkIsOpen.
//
// Add a pair of conditional statements to print one of the following messages
// to the console based on the parkIsOpen variable:
//
//    "Welcome to the Flappy National Park! Try to enjoy your stay."
// OR
//
//    "Sorry, Flappy needs some maintenance work. We're closed!"
//
// Use the code below in your solution.

var parkIsOpen = false;
// for (currentGen = 4; currentGen <= totalGen2; currentGen++) {
//     console.log(`Generator ${currentGen} is on, adding 124 MW, for a total of ${totalMW2} MW!`);
//     totalMW2 = totalMW2 + 124

// while (currentGen <= totalGen1) {
//     console.log(`Generator ${currentGen} is on, adding 62 MW, for a total of ${totalMW1} MW!`);
//     totalMW1 = totalMW1 + 62
//     currentGen++
//
if  (parkIsOpen) {
    console.log('Welcome to the Flappy National Park! Try to enjoy your stay.');
}
/*else*/else {
    console.log('Sorry, Flappy needs some maintenance work. We\'re closed!');
}
