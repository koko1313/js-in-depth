let doWhatever = ["have fun", "have more fun", "have even more fun"];
let life = ["born", "learn to walk", "learn js", ...doWhatever, "do to heaven"];

console.log(life); // ["born", "learn to walk", "learn js", "have fun", "have more fun", "have even more fun", "do to heaven"];

// combine two arrays
let a = [1, 2, 3];
let b = [4, 5, 6];

a.push(...b);

console.log(a); // [1, 2, 3, 4, 5, 6]