// Prompt the user to enter a day of the week

let day = prompt("Enter a day of the week:");

// Convert the input to lowercase for easier comparison

day = day.toLowerCase();

// Declare a variable to store the output message

 let message;

// Use a switch statement to check the input

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    message = "Today is " + day;
    break;
  case "saturday":
  case "sunday":
    message = "Today is a weekend day";
    break;
  default:
    message = "Invalid input"; 
}
// Output the message to the console
console.log(message);




