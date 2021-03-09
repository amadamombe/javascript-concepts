
//functions 10/03/2021


// simple function
function hello() {
    console.log("Hello world i am knocking at your door");
}

hello();


// function with arguments
function hello(fname, mname, lname) {
    var fullName = `Hello ${fname} ${mname} ${lname}, how are you doing?`;
    return fullName;
}

var sayFullName = hello("Augustine", "Fungai", "Madamombe");
console.log(sayFullName);

console.log(hello("Tim", "Apples", "Cook"));
