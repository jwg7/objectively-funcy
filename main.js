// Your code here.

let user1 = {
  firstName: 'Colin', 
lastName: 'Jaffe',
age: 39
}

function getFirstName(user) {
return user.firstName
}

console.log(getFirstName(user1))

///////////////////////////////////////////
///////////////////////////////////////////

function getLastName(user) {
return user.lastName
}

console.log(getLastName(user1))


///////////////////////////////////////////
///////////////////////////////////////////


function getFullName(user) {
  return `${user.firstName} ${user.lastName}`
}

console.log(getFullName(user1));

////////////////////////////////////////////
/////////////////////////////////////////////


let person1 = {firstName: 'Colin', lastName: 'Jaffe'}

function setFirstName(user, newFirstName) {
  user.firstName  = newFirstName;
}


setFirstName(person1, 'John');
console.log(person1)

/////////////////////////////////////////////
////////////////////////////////////////////

function setAge(user, newAge) {
user.age = newAge;
}

setAge(user1, 45);
console.log(user1)

//////////////////////////////////////////
//////////////////////////////////////////

function giveBirthday(user) {
  if(user.age === undefined) {
    user.age = 1;
    } else {
      user.age = user.age + 1
    }
}

giveBirthday(user1);
console.log(user1)
giveBirthday(person1);
console.log(person1)

/////////////////////////////////////////////
///////////////////////////////////////////

const person3 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
const person4 = {firstName: 'Petra', lastName: 'Solano', married: false}

function marry(person1, person2) {
person1.married = true
person2.married = true
  person1.spouseName = `${person2.firstName} ${person2.lastName}`
  person2.spouseName = `${person1.firstName} ${person1.lastName}`
}

marry(person3, person4);
console.log(person3, person4);

//////////////////////////////////////////////
//////////////////////////////////////////////

const person5 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
const person6 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}

function divorce(person1, person2) {
person1.married = false
person2.married = false
delete person1.spouseName
delete person2.spouseName
}

divorce(person5, person6);
console.log(person5, person6);

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
