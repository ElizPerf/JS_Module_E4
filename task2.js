// variant 1
function testConditions(string, obj) {
  let test = false
  if (string in obj) {
    test = true
  }
  return test
}

console.log(testConditions(str, myObj));


// variant 2
function testConditions(string, obj) {
  return string in obj;
}

let myObj= {
  name: "Kevin",
  age: 35,
  city: "London",
  status: "married"
};

const str = "name"
// const str = "date_0f_birth"

console.log(testConditions(str, myObj));


