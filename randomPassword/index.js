const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

/*let firstPass=document.getElementById("leftText")
let secondPass=document.getElementById("rightText")
let myPassword=document.getElementById("passGen")

myPassword.addEventListener("click", function(){
    firstPass=""
    secondPass=""
    firstPass.textContent=twoRandomPass();
secondPass.textContent=twoRandomPass();

randomPasswordTwo();
})

let passLimit=15

function twoRandomPass(){
    let myNewPassword=""
    for(let i=0;i<passLimit;i++){
        let myNewPassword=""
        let randomPassword=Math.floor(Math.random()*characters.length)
        myNewPassword +=characters[randomPassword]
    }
    return myNewPassword;
    
}
*/

/*
let firstPass=document.getElementById("leftText")
let secondPass=document.getElementById("rightText")

let passLimit1=15
let passLimit2=15

function twoRandomPass(){
    let myNewPassword1=""
    let myNewPassword2=""
    for(let i=0;i<passLimit1;i++){
        let myNewPassword1=""
        let randomPassword1=Math.floor(Math.random()*characters.length)
        myNewPassword1 +=characters[randomPassword1]
        firstPass.textContent=myNewPassword1
    }
    for(let j=0;j<passLimit2;j++){
        let myNewPassword2=""
        let randomPassword2=Math.floor(Math.random()*characters.length)
        myNewPassword2 +=characters[randomPassword2]
        secondPass.textContent=myNewPassword2
    }
    return myNewPassword1;
    return myNewPassword2;
    
}
*/

let firstPass = document.getElementById("leftText");
let secondPass = document.getElementById("rightText");

let passLimit = 15;

function pickRandomThing() {
  return Math.floor(Math.random() * characters.length);
}

function twoRandomPass() {
  let myNewPassword1 = "";
  let myNewPassword2 = "";

  for (let i = 0; i < passLimit; i++) {
    myNewPassword1 += characters[pickRandomThing()];
    myNewPassword2 += characters[pickRandomThing()];
  }
  (firstPass.textContent = myNewPassword1),
    (secondPass.textContent = myNewPassword2);
}
