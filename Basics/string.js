const name = "munira"
const repocount = 50

console.log(name + repocount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repocount} ');

const gameName = new String('munira')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const url = "https://munira.com/munira%20b"
console.log(url.replace('%20','-'));