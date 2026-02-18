import aKaValue from './app.js'
// import {name} from './app.js'
//this {name} should be as same as var name in app.js if it is {name1} it will throw error in console

//if i write like this
import name from './app.js'
//here i will get value of a, becoz we returning it as a default export || thats difference betwwen default export and named export

console.log(name);


console.log(name);

console.log(aKaValue);