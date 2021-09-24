//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE
const colorCopy = faveColors.slice(0,2)
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push('Black')


//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

const middleNums = numbers.slice(1,3)

//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE

function bigOrSmall(arr){
  var answers = [] 
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>100){
      answers.push('big')
    }  
    else {
      answers.push('small')
    }
  }
  return answers;

}

var arrayEvaluator = bigOrSmall(bigOrSmallArray)

console.log(arrayEvaluator)






//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE
function sum(p, p2){
  console.log(parseInt(p + p2))
}

sum(3,2);

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE
function greaterThanFive(number){
  if(number > 5){
    console.log('true')
  } else {
    console.log('false')
  }
} 


//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE
function findZWords(word){
  if(word.startsWith('Z')){
    console.log('the name begins with Z')
  } else {
    console.log('the name does not begin with Z')
  }
}
//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE
function iLove(name,love){
  console.log(name + ' loves ' + love)
}

iLove(Zack, Music);


/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = 'helps update different versions of your code, as well as support work with partners, coworkers, and friends on giant peices of software'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = 'a place where we can hold and share our git files, to more reasonably organize our coding files on a familiar platform across all coding languages'
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description:  'initialize a local repository right here in this folder',
    code: 'git init'

}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'copy a repo from Github and put it on my machine',
    code: 'git clone REPO_URL',
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: 'tell me about this repo',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: 'Type message”: add some files to be tracked',
    code: 'git add -m'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: 'create a snapshot of the files I’m tracking',
    code: 'git commit' 
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    description: 'put my local commits on Github',
    code: 'git push'
}




//////////////////PROBLEM 1////////////////////
/*
  Create an object called 'me' that has the following keys: 
    firstName, state, age, and greeter. 
  The value of the firstName key should be your name as a string. 
  The value of the property state should be your current state or providence of
  residence as a string. 
  The value of age should be your age as a number. 
  
  Last, greeter should be a method that returns the string 
  'Hello! My name is NAMEVALUE and I live in STATEVALUE' 
  with the corresponding values.
  For example: 'Hello! My name is Rubber Duck and I live in Utah"
*/

//CODE HERE

class Me {
  constructor(firstName, state, age){
    this.firstName = firstName;
    this.state = state;
    this.age = age;
  }
  greeter(){
    console.log(`Hello! My name is ${this.firstName } and i live in ${this.state}`)
  } 
}
let Zach = new Me ('Zachary', "North Carolina", 29) 

Zach.greeter()

//////////////////PROBLEM 2////////////////////
/*
  Write a function called carFactory that takes in three parameters: a make, model, and year.  
  When the function is invoked:
    - a string will be sent in for make
    - a string will be sent in for model
    - a number will be sent in for year
  Inside the function, create an object from those parameters.
  Next, write an if statement that will check if the year sent in is greater than 2018.
    - if the year is greater than 2018, add a key to the object called isNew and set it to true
    - else, add a key to the object called isNew and set it to false
      - hint: you can use dot notation or bracket notation
  Last, the function should return the object
  For example,
    carFactory('toyota', 'camry', 2020)
  should return an object that looks like this:
  {
    make: 'toyota', 
    model: 'camry',
    year: 2020,
    isNew: true
  }
*/

//CODE HERE

function carFactory(make, model, year){
    const car = {
      make:make,
      model:model,
      year:year,
    }
    if(year > 2018){
      car.isNew=true;
    } else {
      car.isNew=false;
    }return car;
  }
  console.log(carFactory('Nissan', '350', 2014));
  console.log(carFactory('BMW', '325i', 2020));






//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
var myName = 'Zachary Sterman'
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
var faveNum = 69
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
var lovesCode = True 
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

if(faveNum === 13){
  console.log('lucky 13')
} else {
  console.log ('not lucky 13')
};

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE
for (let i = 0; i < 5; i++) {
  console.log(faveNum)
}
