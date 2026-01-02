// "1. Create an object called user with name and age.
// 2. Inside the object, create a method that prints the user name using the this keyword (to show lexical scope understanding).
// 3. Create two arrays (e.g., fruits and vegetables) and merge them into one array using the spread operator.
// 4. Create a simple function that accepts a callback function and calls it after printing a message.
// 5. Use an arrow function as the callback."


let user = {
  name: "Jack",
  age: "20",

  userdata() {
    console.log(this.name);
  },
};
user.userdata();

let dryfruits = ["almond", "anjeer", "cashew"];
let pomefruit = ["Apple", "kiwi", "peach", "pineapple"];

let winterspecial = [...dryfruits, ...pomefruit];
console.log(winterspecial);

function data(...a) {
  console.log(a);
}

data("how are you", () => {
  data();
});
