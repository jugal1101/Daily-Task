// 1. Create a Student class with a constructor that takes name and marks.
class Student {
    constructor(){
  return 
    }
    name(){
        return "Jugal"
    }
    marks(){
        return "60%"
    }
}

let result = new Student
console.log(result.name())
console.log(result.marks())


// 2. Create an array of 3 student objects using the Student class.

 class Students {
     
    first(){
 return "max"
    }
    second(){
     return "min"
    }
    third(){
  return "mount"
    }
 }

 let names = new Students
  console.log(names.first());
  console.log(names.second());
  console.log(names.third());
  

// 3. Use map() to display each student’s name and marks using template literals.

let stud = [{
    name : ["jack","max","rocks"],
    marks : ["30","40","50"]
}]

let arr = stud.map((data)=>{
   console.log(data)
})



// 4. Use find() to get the student who scored more than 60 marks.

let arrs = [10,20,30,40,50,70,100]
  
let results = arrs.find(function(marks){
   return marks>60
})
console.log(results)

// 5. Write one arrow function to add bonus marks (default value: 5)."

let a = ((data)=>{
   console.log(data + 20 + ":bonus marks")
})
a(5)