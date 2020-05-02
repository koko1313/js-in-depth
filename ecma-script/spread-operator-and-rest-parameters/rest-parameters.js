// min parameters "a" and "b" and then unlimited number of more parameters
const sum = (a, b, ...n) => {
    let sum = a + b;

    n.forEach((number) => {
        sum += number;
    });

    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6));