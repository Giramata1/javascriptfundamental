//a. a function that returns the full name of a person
function fullName(person){
    return (`${person.firstname} ${person.lastname}` );
}

const person = {
    firstname: "Giramata",
    lastname:"Aliane"
};
console.log((fullName(person)));

//b.Write a function that checks if a person is 18 or older

function isAdult(people){
    return people.age >= 18;
}
const people1 ={
    name:"keza",
    age:16
};
const people2 ={
name:"Nema",
    age:22
};
console.log(isAdult(people1));
console.log(isAdult(people2));      

//c.Write a function that filters an array of person objects to keep only those who are at least minAge years old

function filterPeoples(peoples, minAge){
    return peoples.filter(person => person.age >= minAge);
}
const peoples =[
    {name:"keza", age:16},
    {name:"Nema", age:22},
    {name:"cyusa", age:25},
    {name:"hirwa", age:14}
];
console.log(filterPeoples(peoples, 18));

//d.Write a function that adds a new property to an object.

function addProperty(human, property, value){
    human[property] = value;
    return human;
}
const human = {
    name:"keza",
    age:16,
    gender:"female"

};
console.log(addProperty(human,"phonenumber","0788594520"));

//e.Write a function that checks if an object has a specific property

function hasProperty(object, property){
    return object.hasOwnProperty(property);
}
console.log(hasProperty(human, "gender"));
console.log(hasProperty(human, "job"));

//f. Write a function that returns the number of properties in an object

function countProperties(object){
    return Object.keys(object).length;
}
console.log(countProperties(human));




