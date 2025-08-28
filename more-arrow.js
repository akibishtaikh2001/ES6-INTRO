const diffrence = (x, y) => x - y;
const multiply = (fitst, second, third) => fitst * second * third;

// single parameter or one parameter
const getAge = (person) => person.age;
const student = { name: 'ananta', age: 45}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13]);
console.log(third);

// if your perameter is singel then you can't use bracket
const doubleIt = num => num *2; 

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function. if you want to get anything returend form this function, then you have to use return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}