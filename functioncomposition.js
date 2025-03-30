//1.a. Create a function to reverse and capitalize a string
function reverseAndCapitalize(str) {
    return str.split('').reverse().join('').toUpperCase();
  }

  const input = "study hard";
  const result = reverseAndCapitalize(input);
  console.log(result); 
  //2.a.Create a function to double all the even numbers in an array
  function doubleEvens(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
  }
  

  const numbers = [ 1,2,4,6];
  const result1 = doubleEvens(numbers);
  console.log(result1);

  //b.function addStatusToStudents 
  function addStatusToStudents(students) {
    return students.map(student => student.grade > 50? {...student, status: "pass" } : {...student, status: "fail" });
  }
  const students = [
    { name: "mucyo", grade: 40 },
    { name: "caline", grade: 85 },
    { name: "belange", grade: 70 }
  ];
  const result2 = addStatusToStudents(students);
  console.log(result2);

  //c.Write a function that sorts an array of objects 
  function sortPeople(people, key) {
    return people.sort((a, b) => a[key] - b[key]);
  }
  const people = [
    { name: "mucyo", age: 25 },
    { name: "caline", age: 30 },
    { name: "belange", age: 20 }
  ];
  const result3 = sortPeople(people, "age");
  console.log(result3);
//d. write a function that returns only the products in a specified category
  function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
  }
  const products = [
    { name: "apple", category: "fruit" },
    { name: "banana", category: "fruit" }
  ];
  const result4 = filterByCategory(products, "fruit");
  console.log(result4);

  //e.Write a function that stores results of previous calculations to avoid recomputation
  function memoize(func) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = func.apply(this, args);
      cache[key] = result;
      return result;
    };
  }
  const factorial = memoize((n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  });
  console.log(factorial(5)); 
  

  
  
