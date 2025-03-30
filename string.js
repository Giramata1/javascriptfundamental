//1. String Transformations
//a.Write a function that capitalizes the first letter of a string
function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const words = capitalize("you are students");
  console.log(words);
  
  //b.write reverse function
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  const result = reverse("your are student");
  console.log(result);
  
  //c.Write a function that checks if a string is a palindrome
  function isPalindrome(str) {
    return str.split("").reverse().join("") === str;
  }
  const Result = isPalindrome("level");
  console.log(Result);
  
  //d.Write a function that counts the number of words in a given string
  function countWords(str) {
    return str.split(" ").length;
  }
  const count = countWords("where is my bag");
  console.log(count);
  
  //e.Write a function that converts a string to snake_case
  function toSnakeCase(str) {
    return str.replace(/\s+/g, "_").toLowerCase();
  }
  const snake = toSnakeCase("You are smart");
  console.log(snake);
  
  //f.Write a function that converts a string to camelCase
  function toCamelCase(str) {
    return str.replace(/_([a-z])/g, function ($1, $2) {
      return $2.toUpperCase();
    });
  }
  const camel = toCamelCase("you_are_smart");
  console.log(camel);
  
  //g. Write a function that finds the longest word in a given string.
    function findLongestWord(str) {
      return str.split(" ").reduce((longest, current) => {
        return current.length > longest.length? current : longest;
      }, "");
    }
    const longest = findLongestWord(" my book");
    console.log(longest);
  
    //h.Write a function that counts the number of times a specific letter appears in a string.
    function countLetter(str, letter) {
      return str.split("").filter(char => char === letter).length;
    }
    const countletter = countLetter("Good Morning", "n");
    console.log(countletter);
  