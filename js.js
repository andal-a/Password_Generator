/*Definition of Variables*/
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var upperSelection = false;
var lowerSelection = false;
var specialSelection = false;
var numberSelection = false;


/*Function to Generate a Random Password*/

function generate() {
    var confirmLength = '';
/*Character length preference*/
    while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
        if (confirmLength === null) {
            break;
        }
    }
/*User Input for Character Preferences*/
    if (confirmLength) {  
        
        if (confirm("Would you like to use UPPERCASE characters?") == true) {
            upperSelection = true
        }
        if (confirm("Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 
      
        if (confirm("Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Would you like to use numerical characters?") == true) {
            numberSelection = true
        }
/*Alert Prompt for when selection amount is insufficient*/
        if (upperSelection === false && lowerSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }
/*Password Generator*/
    var characters = ''; 
    characters += (upperSelection ? upper : '');
    characters += (lowerSelection ? lower : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
/*Function for Clipboard Copy*/
function copied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("The password has been copied to your clipboard! °(^-^)°");
}