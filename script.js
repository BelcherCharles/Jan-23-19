// // ## Lightning Exercise Two
// // 1. Create a JavaScript file and link it to your `index.html` file.
// // 2. Use `document.querySelector` to get a reference to the element with an id of "main-header"
// const mainHeader = document.querySelector(".main-header");

// // 3. Log the reference to the console
// console.log(mainHeader);

// // 4. Add a class of "blue-text" to the element
// mainHeader.classList.add("blue-text");
// mainHeader.innerHTML = "This text should be blue";

// // ## Lightning Exercise Three
// // 1. In your JavaScript file, use `document.querySelectorAll` to select all of the elements in your HTML file with a class of "body-text"
// const bodyText = document.querySelectorAll(".body-text");

// // 1. Log the reference to the console
// console.log(bodyText);

// // 1. Loop through the NodeList of elements and set the `.innerHTML` property of each element to "Hello, world!"
// for (i = 0; i < bodyText.length; i++){
//     bodyText[i].innerHTML = "<h2>Hello, world!</h2>";
// }


// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

// const articleHeader = document.querySelector(".article__header");
// articleHeader.innerText = "Welcome to the Charles blog!";


// // Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// const articleHeaderALL = document.querySelectorAll(".article__header");
// console.log(articleHeaderALL);
//     for (let i = 0; i < articleHeaderALL.length; i++){
//     articleHeaderALL[i].classList.add("important");
//     }
// // Obtain a reference the element with a class of dashed and remove it.
// const dashedBox = document.querySelector(".dashed");
// dashedBox.classList.remove("dashed");


// // Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
// const articleFooter = document.querySelector(".article__footer");
// articleFooter.classList.add("goldenrod");


// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0) {
//         console.log("Chicken");
//     }   if (currentNumber % 7 === 0) {
//         console.log("Monkey");
//     }   if (currentNumber % 5 === 0 && currentNumber % 7 === 0){
//         console.log("ChickenMonkey!");
//     }   else {
//         console.log(currentNumber)
//     }
// }

// 1. Write a function called `addToCart` that takes one argument of `itemName`
// function addToCart (itemName){

// // 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.

// const itemAdded = `The ${itemName} has been added to your cart!`;
// console.log (itemAdded);
// }
// // 3. Call the function

// addToCart ("Rubber Chicken");
// addToCart ("5 qts of motor oil");
// addToCart ("Latex gimp suit");


// const inventory = ["Coats", "Gloves", "Hats", "Scarves"];

// // 2. Write a function that loops through the `inventory` array and prints each item to the consol

// function invArray (inventoryArray) {
//     for (let i = 0; i < inventoryArray.length; i++){
//     console.log (inventoryArray[i]);
//     }
// }
// // 3. Call the function

// invArray (inventory);

// // (If you get done early, refactor the function so that it takes an array as a parameter and loops through it, then try calling it with multiple different arrays)

// 1. Copy and paste the following array into your JavaScript file:

//  const detailedInventory = [
//    {
//      name: "Coat",
//      quantity: 9,
//      price: 79.99
//    },
//    {
//      name: "Gloves",
//      quantity: 24,
//      price: 12.99
//    },
//    {
//      name: "Hats",
//      quantity: 16,
//      price: 9.99
//    },
//    {
//      name: "Scarves",
//      quantity: 6,
//      price: 14.99,
//    }
//  ]

// //  2. Write a function that loops through the `detailedInventoryArray` and prints the name of each item to the console.

// function printInvArray (){
//     for (let i = 0; i < detailedInventory.length; i++){
//         console.log (detailedInventory[i].name);
//     }
// }
// //  3. Refactor the function so that it only prints the name of the item if it's under $20.00. 
// function printInvArray2 (){
//     for (let i = 0; i < detailedInventory.length; i++){
//         if (detailedInventory[i].price <= 19.99){
//             console.log (`${detailedInventory[i].name} are less than $20.00.`);
//         }
//     }
// }

// function flattenArray(){
//     const arrayOfNames = [];
//         for (let i = 0; i < detailedInventory.length; i++){
//             console.log(arrayOfNames)
//             arrayOfNames.push(detailedInventory[i].name);
//         }
//     return arrayOfNames;
//     }
    

// //  4. Call the function


// flattenArray()
// printInvArray()
// printInvArray2()




const bandNames = [
{
    Name: "Galactic scum"
},
{
    Name: "Underdogs"
}]

function takeNumber (){ 
    for (i = 0; i < bandNames.length; i++){
        console.log(`${i+1}. ${bandNames[i].Name}`);
    }
}

takeNumber()
// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console


const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];

// An empty array that will store the objects after the `grill()` function cooks the food.

function grill(currentObject) {
    currentObject.cooked = true;
    cookedFood.push(currentObject);
}
        
    for (let i=0; i<foods.length; i++) {
        grill(foods[i]);
        console.log(cookedFood[i]);
    }

    console.log(cookedFood)

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

// function grill (currentObject) {

    // Modify the food so that it is cooked

    // currentObject.cooked = true;

    // Put the cooked food into the appropriate array

//     cookedFood.push(currentObject);
// };

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.