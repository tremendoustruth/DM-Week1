//The following program is a simple password validator.

let password = "otapassw0rd!44444444"
if (password.length>=10 && password.length<20){console.log("Your password has the correct number of characters");} // this combines 2 tests to check for the correct length of characters
    else {console.log("Please change your password to the correct length");}
if (/[0-9]/.test(password)===true){console.log("Your password contains a number");} // this test checks to see if the string contains a number
     else {console.log("Please insert a number into your password");}
if (/[A-Z]/.test(password)===true){console.log("contains uppercase");} // this test checks to see if the string contains an uppercase letter
    else {console.log("Please insert an uppercase letter");}
