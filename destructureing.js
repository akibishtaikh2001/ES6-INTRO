const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01753322386',
    money: 123214564156132131
}
// if right side is an object left side of destructing will be object as well
// use property name as a variable that contains the property value
const {phone, age: boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);


// array destructuring
const numbers = [45, 99];
const [firs, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
