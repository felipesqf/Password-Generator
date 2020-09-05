// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of password characters
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

function generatePassword(){
  var howMany = prompt("how many characters?");
  var passwordLength = parseInt(howMany);
  var concatenatedArray = [];
  var newPassword = [];

  if ((passwordLength < 8) || (passwordLength > 128) || (typeof passwordLength != "number")){
    alert("You must choose between 8 and 128 characters. Please enter numbers only");}
  else{ 
    var capitalLetterConfirm = confirm("Do you want to include Capital Letters?");
    var lowerCaseLetterConfirm = confirm("Do you want to include Lower Case Letters?");
    var specialCharactersConfirm = confirm("Do you wanna include Special Characters?");
    var numbersConfirm = confirm("Do you wanna include Numbers?");
        if ((capitalLetterConfirm == false) && (lowerCaseLetterConfirm == false) && (specialCharactersConfirm == false) && (numbersConfirm == false)){
            alert("You must select at least one option");}};

  function joinArrays(collection){
    concatenatedArray = concatenatedArray.concat(collection);};

  if(capitalLetterConfirm == true){
    joinArrays(upperCasedCharacters);};

  if(lowerCaseLetterConfirm == true){
    joinArrays(lowerCasedCharacters);};

  if(specialCharactersConfirm == true){
    joinArrays(specialCharacters);};

  if(numbersConfirm == true){
    joinArrays(numericCharacters);};

for (var i = 0; passwordLength > newPassword.length; i++){
  newPassword[i] = concatenatedArray[Math.floor(Math.random()*concatenatedArray.length)];}

return password = newPassword.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
