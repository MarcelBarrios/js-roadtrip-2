// Video 1.4 accompanies this exercise

// The Dinger Dam has 19 generators of multiple types. For simplicity, let’s
// say that the first 4 of these generators output 62 megawatts, and the other
// 15 output 124 megawatts. The Dam Rangers have asked you to
// design a system of two loops that turns each generator on in progression,
// and prints the new total of megawatts generated.
//
// They’d like the first loop to be a while loop handling the first 4
// generators. Then, they’d like the second loop to be a for loop that handles
// the other 15 generators. Each output line should resemble the following
// lines, with adjusted values for the currentGen and totalMW:
//
//    Generator #1 is on, adding 62 MW, for a total of 62 MW!
//    Generator #2 is on, adding 62 MW, for a total of 124 MW!
//
// Use the variables below in your solution.

var currentGen = 1;
var totalGen1 = 4;
var totalGen2 = 19;
var totalMW1 = 62;
var totalMW2 = 124;

// while (num <= 10){
//
//     console.log(num);
//
//     num++ // num = num - 1 // num -= 1
// }
//

while (currentGen <= totalGen1) {
    console.log(`Generator ${currentGen} is on, adding 62 MW, for a total of ${totalMW1} MW!`);
    totalMW1 = totalMW1 + 62
    currentGen++
}
//
// for (num = 10; num >= 1; num--) {
//     console.log(num);
// }


for (currentGen = 4; currentGen <= totalGen2; currentGen++) {
    console.log(`Generator ${currentGen} is on, adding 124 MW, for a total of ${totalMW2} MW!`);
    totalMW2 = totalMW2 + 124

}
