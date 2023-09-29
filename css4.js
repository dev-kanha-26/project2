// 1
// let num = prompt("Enter a number: ");
// if(num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// 2
// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// alert(`${name} is ${age} years old`);

// 3
// let quart = prompt("Enter quart num: ");
// switch(quart){
//     case 1:
//         console.log("January, Feb, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, Aug, Sept");
//         break;
//     case 4:
//         console.log("Oct, Nov, December");
//         break;
//     default:
//         console.log("Invalid Input!");
// }

// 5
// let a = 5, b= 8 , c = 2;
// if(a>b && a>c){
//     console.log("largest num: ",a);
// }
// else if(b>c && b>a){
//     console.log("largest num: ",b);
// }
// else{
//     console.log("largest num: ",c);
// }

// 6
// let a = prompt("Enter the 1st num: ");
// let b = prompt("Enter the 2nd num: ");
// let temp1 = a%10;
// let temp2 = b%10;
// if(temp1 == temp2){
//     console.log("Both have the same last digit", temp1);
// }
// else{
//     console.log("Not same");
// }

// let msg = "Priyabrata Sahu";
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// let students = ["kanha", "priyabrata", "sahu"];

// let month = ["january", "july", "march", "august"];

// Q3.1.
// let num = prompt("Enter the num: ");
// let arr = [7,9,0,-2];
// let res = arr.slice(0,num);
// console.log(res);

// Q3.2.
// let n = prompt("Enter the num: ");
// let arr = [7,9,0,-2];
// let res = arr.slice(-n);
// console.log(res);

// Q3.3.
// let str = " ";
// if(str==false){
//     console.log("String is blank");
// }
// else{
//     console.log("String is not blank");
// }

// Q3.4.
// let str = "Priyabrata Sahu";
// let idx = 3;
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("It is Lowercase");
// }
// else{
//     console.log("It is not lowercase");
// }

// Q3.6.
// let str = ["red","orange","yellow","blue","white"];
// let check = prompt("Enter the name: ");
// if(str.includes(check)){
//     console.log("Element exists");
// }
// else{
//     console.log("Element is not exists");
// }

// or
// let str = ["kanha",  64, 5, 0.3];
// let check = 50;
// if(str.indexOf(check) != -1){
//     console.log("element exists");
// }
// else{
//     console.log("Element is not exists");
// }

// for(let i = 1; i<=20; i=i+2){
//     console.log(i);
// }
// for(let i=19; i>=1; i=i-2){
//     console.log(i);
// }

// let i = 1;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// let fav = "Iron Man";
// let guess = prompt("Enter the movie name: ");

// while((guess != fav)){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("Wrong input! Please try again");
// }

// if(guess == fav){
//     console.log("Congrats!");
// }
// else{
//     console.log("You quit");
// }

// let i = 1;
// while(i<10){
//     if(i==5)
//     break;
//     console.log(i);
//     i++;
// }

// loop for accessing the array elements
// let fruits = ["mango", "orange", "apple", "banana","litchi","grapes"];
// for(let i= 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }
// for(let i = fruits.length-1; i>=0; i=i-2){
//     console.log(i, fruits[i]);
// }

// let heroes = [["iron man","spider man","thor"],["batman","superman","flash"]];

//  for(let i = 0; i<heroes.length; i++){
//     console.log(`List #${i}`)
//     for(let j = 0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let heroes = [["iron man","spider man","thor"],["batman","superman","flash"]];
// for(list of heroes){
//     console.log(`list of hero: `)
//     for(hero of list){
//         console.log(hero);
//     }
// }

// Q4.1.
// let arr = [1,2,3,4,5,6,2,3];
// let num = 1;
// let i = 0;
// while(i<arr.length){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
//     i++;
// }
// console.log(arr);

// Q4.2.
// let num = 287152;
// let c = 0;
// while(num>0){
//     // let rem = num % 10;
//     c++;
//     num = Math.floor(num/10);
// }
// console.log(c);

// Q4.3.
// let num = 287152;
// let sum = 0;
// while(num > 0){
//     let rem = num % 10;
//     sum = sum + rem;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// Q.4.4.
// let n = prompt("Enter a number");
// let res=1;
// while(n>0){
//     res = res * n;
//     n--;
// }
// console.log(res);

// Q.4.5.
// let arr = [45, 34, 78, 9, 1, 99, 8];
// let max = -1000;
// for(let i = 0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let student = {
//     name: "kanha",
//     age: 21,
//     marks: 95    
// };

// let student2 = ["kanha", 21, 95];

// const post = {
//     username: "@priyabrata",
//     content: "This is my #firstpost",
//     likes: 120,
//     repost: 8,
//     tag: ["@kanha", "@sahu"]
// };

// const obj = {
//     1: "a",
//     2: "90",
//     true: "true",
//     null: "d",
//     undefined: "e"
// }

// const classInfo = {
//     kanha: {
//         grade: "A+",
//         city: "ang"
//     },
//     sahu: {
//         grade: "A",
//         city: "dkl"
//     },
//     priya: {
//         grade: "O",
//         city: "bbsr"
//     }
// };

// Gussing number
// let max = prompt("Enter the max number");
// let random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("Enter the gussing number: ");
// while(true){
//     if(guess == "quit"){
//         console.log("You quit!");
//         break;
//     }
//     if(guess == random){
//         console.log("Congrats correct answer",random);
//         break;
//     }
//     else if(guess < random){
//         guess = prompt("hint: You enter small guess ! Please try again");
//     }
//     else{
//         guess = prompt("hint: you enter larger guess number! Please try again");
//     }
// }

// Q5.1.
// let random = Math.floor(Math.random() * 6) + 1;
// console.log(random);

// Q5.2.
// const car = {
//     name: "Mahindra",
//     model: "xuv_700",
//     color: "white"
// };

// Q5.3.
// const person = {
//     name: "pritam",
//     age: "23",
//     city: "bhadrak"
// }

// function print1to5(){
//     for(let i = 1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = prompt("Enter the age");
//     if(age >= 18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not adult");
//     }
// }
// isAdult();

// function rolldice(){
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }

// rolldice();
// rolldice();
// rolldice();
// rolldice();
// rolldice();
// rolldice();

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("kanha",21);

// function calcAvg(a, b, c){
//     let res = (a+b+c)/3;
//     console.log(res);
// }

// function printTable(n){
//     for(let i = 1; i<=10; i++){
//         console.log(`${n} X ${i} = ${n*i}`);
//     }
// }

// function isAdult(n){
//     if(n >= 18){
//         return "adult";
//     }
//     else{
//         return "Not Adult";
//     }
// }

// let str = ["hi", "hello", "bye", "!"];
// function concat(str){
//     let result = "";
//     for(let i = 0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }

// let greet = "hello";
// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();

// let hello = function(){
//     console.log("hello");
// }

// hello = function(){
//     console.log("namaste");
// }

// let sum = function(a, b){
//     return a+b;
// }

// let greet = function(){
//     console.log("hello");
// }
// function multipleGreet(func, n){
//     for(let i = 1; i<=n; i++){
//         func();
//     }
// }
// multipleGreet(greet, 100);

// let odd = function(n){
//     console.log(!(n%2==0));
// }
// let even = function(n){
//     console.log(n%2==0);
// }
// function OddorEvenFactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("Wrong request!");  
//     }
// }
// let request = "odd";

// const calculator = {
//     add(a, b){
//         return a+b;
//     },
//     sub(a, b){
//         return a - b;
//     },
//     mul(a, b){
//         return a * b;
//     }
// };

// Q6.1.
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5; 
// function getElement(arr, num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }

// Q6.2.
// let str = "abcdabcdefgggh";
// let ans = "";
// function uniChar(str){
//     for(let i=0; i<str.length; i++){
//         if(ans.indexOf(str[i]) == -1){
//             ans += str[i];
//         }
//     }
//     console.log(ans);
// }

// Q6.3.
// let country = ["Australia", "Germany", "United States of America", "united kingdom", "india"];
// function longCountry(){
//     let max = country[0].length;
//     let idx = 0;
//     for(let i = 1;i<country.length; i++){
//         if(max < (country[i].length)){
//             max = country[i].length;
//             idx = i;
//         }
//     }
//     console.log(country[idx]);
// }

// Q6.4.
// let str = "abecidosdf";
// function countVowels(str){
//     let c = 0;
//     let str1 = str.toLowerCase();
//     for(let i=0; i<str1.length; i++){
//         let ch = str1[i];
//         if(ch=='a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
//             c++;
//         }
//     }
//     console.log(c);
// }

// Q6.5.
// function generateRand(start, end){
//     let diff = end - start;
//     let rand = Math.floor(Math.random() * diff) + start;
//     console.log(rand);
// }

// const student = {
//     name: "kanha",
//     age: 21,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         // console.log(avg);
//         console.log(`${this.name} got avg marks: ${avg}`);
//     }
// };
// function getAvg(){
//     console.log(this);
// }

// try{
//     console.log(a);
// }catch(err){
//     console.log("caught an error! a.. is not defined");
//     console.log(err);
// }

// const sum = (a , b) => {
//     console.log(a+b);
// };
// const pow = (a , b) => {
//     return a**b;
// };
// const sum = (a,b) => (a+b);
// const mul = (a,b) => (a*b);
// const cube = (n) => (n*n*n);

// console.log("Hi there!");
// setTimeout(() => {
//     console.log("Apna college");
// }, 4000);
// console.log("Welcome to");

// let id = setInterval(() => {
//     console.log("Hello kanha");
// }, 2000);
// console.log(id);
// let id2 = setInterval(() => {
//     console.log("Hello World");
// }, 2000);
// console.log(id2);

//https://github.com/dev-kanha-26/project2.git