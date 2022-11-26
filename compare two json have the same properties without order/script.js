var obj1 = {name: "Person 1", age: 5};
var obj2 = {age: 5, name: "person 1"};
if(JSON.stringify(obj1)===JSON.stringify(obj2)) {
    console.log(true);
} else {
    console.log(false);
}
// RESULT : false



var obj1 = {name: "person 1", age: 5};
var obj2 = {name: "person 1", age: 5};
if(JSON.stringify(obj1)===JSON.stringify(obj2)) {
    console.log(true);
} else {
    console.log(false);
}

// RESULT : true

