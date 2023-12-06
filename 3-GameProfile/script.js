var firstName = "The";
var lastName = "Hero";
var username = "Username: " + firstName + " " + lastName;
console.log(username);

var characterName = "Villain";
var character = "Character: " + characterName;
console.log(character);

document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;
