// 1. Create a Student class with a constructor that takes name and marks.
// 2. Create an array of 3 student objects using the Student class.
// 3. Use map() to display each student’s name and marks using template literals.
// 4. Use find() to get the student who scored more than 60 marks.
// // 5. Write one arrow function to add bonus marks (default value: 5)."
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

// Array of 3 student objects
const students = [
  new Student("Jack", 40),
  new Student("John", 70),
  new Student("Jasus", 90)
];

// map() → display name and marks
const studentDetails = students.map(
  stud => `Name: ${stud.name}, Marks: ${stud.marks}`
);
console.log(studentDetails);

// find() → student who scored more than 60
const topper = students.find(stud => stud.marks > 60);
console.log(topper);


let final = (mark , bouns = 5)=>{
 console.log("bounce marks =>"+ (mark + bouns))  

}

final(topper.marks)