// Assignment Code
let generateBtn = document.querySelector('button');

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
function generatePassword(){
  // add logic here
  let length = prompt("what would you like your password lenth");
  let lowercase = prompt("would you like lowercase ");
  let uppercase = prompt("would you like uppercase ");
  let numeric = prompt("would you like numeric ");
  let specialCharacters = prompt("would you like special characters");

  //possible password values
  let valuesUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let valuesLower = "abcdefghijklmnopqrstuvwxyz";
  let valuesSpecialCharacters = "!@#$%^&*()_+";
  let valueNummbers = "0123456789";
  let password = "";
  let FinalPassword = "";
  
  if (uppercase === 'yes') {
    password = password + valuesUpper;
   console.log(password);
  }
  if (lowercase === 'yes') {
    password = password + valuesLower;
   console.log(password);
  }
  if (numeric === 'yes') {
    password = password + valueNummbers;
   console.log(password);
  }
  if (specialCharacters === 'yes') {
    password = password + valuesSpecialCharacters
   console.log(password);
  }


  // create for loop to choose password characters
  for(let i = 0; i < 1; i++){
    console.log('valuesUpper');
  }
  for(let i = 0; i < 1; i++){
    console.log('valuesLower');
  }
  for(let i = 0; i < 1; i++){
    console.log('valuesSpecialCharacters');
  }
  for(let i = 0; i < 1; i++){
    console.log('valueNummbers');
  }
 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function passwordText() {
  return writePassword;
}
 