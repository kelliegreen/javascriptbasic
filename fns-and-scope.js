//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 function isTyler(name) {
  if(name === "Tyler") {
    return("true");
  } else {
      return("false");
    }
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 function getName(name) {
  var yourName = prompt("What is your name?");
    return(yourName);
};

getName();


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function getName() {
  var yourName = prompt("What is your name?");
  return function welcome() {
    alert("Welcome, " + yourName + ".");
      
  }
}

var hello = getName();
hello();


//Next problem




//What is the difference between arguments and parameters?

 Parameters are the names in the function definition. Arguments are values passed to the function.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  falsy values: (undefined, null, NaN, 0, "")  to check if it is false put ! in front of what you are checking.



//Next Problem



//Create a function called myName that returns your name

 function myName() {
  return("Kellie Green");
  
};
myName();

//Now save the function definition of myName into a new variable called newMyName

 var newMyName = function myName() {
  return("Kellie Green");
  
};
myName();

//Now alert the result of invoking newMyName

var newMyName = function myName() {
  return("Kellie Green");
  
};
alert(newMyName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

 function outerFn() {
  return(function() {
    return("Kellie Green");
  });
}

outerFn();

//Now save the result of invoking outerFn into a variable called innerFn.

 function outerFn() {
  return(function() {
    return("Kellie Green");
  });
}

var innerFn = outerFn();


//Now invoke innerFn.


function outerFn() {
  return(function() {
    return("Kellie Green");
  });
}

var innerFn = outerFn();
innerFn();
