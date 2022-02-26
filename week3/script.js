// Assignment Code

const generateBtn = document.querySelector("#generate");
const spanPasswordLength = document.getElementById("span-length-display");
const inputPasswordLength = document.getElementById("input-length");
const inputLowercase = document.getElementById("input-lowercase");
const inputUppercase = document.getElementById("input-uppercase");
const inputSymbol = document.getElementById("input-symbol");
const inputNumber = document.getElementById("input-number");
const textareaPassword = document.getElementById("password");
const error = document.getElementById("error");

setPasswordLengthSpan();




function setPasswordLengthSpan(){
    // grab the value of input
    const passwordLength = inputPasswordLength.value;

    // change the text content of span
    spanPasswordLength.textContent = passwordLength;
}

// when I change the slider
inputPasswordLength.addEventListener('input', function(event){
  
  // the span pw len should be updated
  setPasswordLengthSpan();
  
  

});

const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const upppercaseSet = "ABCDEFGHIJKLMNOPQRUSTUVWXYZ";
const numberSet = "1234567890";
const symbolSet = "@#$%^&*()";


// when I click on the generate btn
generateBtn.addEventListener('click', function(event){


  // the app will ask me my password length
  const passwordLength = Number(inputPasswordLength.value);
  console.log(passwordLength);
  // it will ask if i want to use  (done in html)
  
  let charset = "";

  // lowercase
  const wantsLowercase = inputLowercase.checked;
  // uppercase
  const wantsUppercase = inputUppercase.checked;
  // symbols
  const wantsSymbol = inputSymbol.checked;
  // numbers
  const wantsNumber = inputNumber.checked;
  
  // in my password
  error.textContent = "";

  if(!wantsLowercase && !wantsUppercase && !wantsSymbol && !wantsNumber){
    // throw error
    error.textContent = "YOU SHOULD CHOOOSE PLEASSSEE";
    return;
  }

  
  // once I have selected all the options
  if(wantsLowercase){
    charset = charset + lowercaseSet;
  }
  if(wantsUppercase){
    charset = charset + upppercaseSet;
  }
  if (wantsNumber) {
      charset = charset + numberSet;
  }
  if (wantsSymbol) {
      charset = charset + symbolSet;
  }
  
  // then the app should generate the password based the options
  
  let password = "";
  
  // loop for passwordlength times, 
  for (let index = 0; index < passwordLength; index++) {
    // for each iteration,
    // we will generate a random char from the charset chosen
    const randomIndex = Math.floor(Math.random() * charset.length);

    const randomChar = charset[randomIndex];
    // then we will add this random char to accumalator
    password = password + randomChar;
    
  }
  
  // then show the generated password in the textarea
  textareaPassword.textContent = password;

  
})  


