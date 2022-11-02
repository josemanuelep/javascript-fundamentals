// Arrays

let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

function adder(number) {
  sum += number;
}

//One approach

numbers.forEach((element) => {
  sum += element;
});

// Other approach usign function

numbers.forEach(adder)

console.log(sum);
