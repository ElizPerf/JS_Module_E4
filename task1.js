function personality(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}

let myObj = {
  name: "Kevin",
  age: 35,
  city: "London",
  status: "married"
};

const gender = Object.create(myObj);
gender.sex = "male";

personality(myObj);

personality(gender);
