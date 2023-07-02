// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    return Math.pow(a, b);
}
console.log(power(2, 3)
)
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// function leapYear() {
//     const askYear = +prompt('Enter a year to known whether the year is a leap year or not?')
//     if (askYear % 4 == 0 || askYear % 400 == 0) {
//         console.log("leap year")
//     }
//     else {
//         console.log("not a leap year")
//     }
// }
// leapYear()


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function triangle(a, b, c) {
    const areaOfTriangle = a + b + c / 2;
    console.log(areaOfTriangle)
}
triangle(2, 40, 5)


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.



const calculateAverage = (marks1, marks2, marks3) => {
    const average = (marks1 + marks2 + marks3) / 3;
    return average;
}

const calculatePercentage = (marks1, marks2, marks3) => {
    const totalMarks = 300; // Assuming each subject has 100 marks
    const obtainedMarks = marks1 + marks2 + marks3;
    const percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
}

const mainFunction = () => {
    const marks1 = parseFloat(prompt("Enter marks for subject 1:"));
    const marks2 = parseFloat(prompt("Enter marks for subject 2:"));
    const marks3 = parseFloat(prompt("Enter marks for subject 3:"));

    const average = calculateAverage(marks1, marks2, marks3);
    const percentage = calculatePercentage(marks1, marks2, marks3);

    console.log(`Average marks: ${average}`);
    console.log(`Percentage: ${percentage}%`);
}

mainFunction();


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.



const customIndexOf = (string, searchChar) => {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === searchChar) {
            return i;
        }
    }
    return -1; // Return -1 if the search character is not found
}

// Usage example
const text = "Hello, world!";
const searchCharacter = "o";
const index = customIndexOf(text, searchCharacter);

console.log(`Index of '${searchCharacter}' in '${text}': ${index}`);


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


const vowelsRemove = () => {
    let text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe quas quasi exercitationem omnis dolore doloremque velit quisquam nulla beatae. Magnam sed officiis dolor porro quia inventore minus facilis laborum.
    `
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let vowel of vowels) {
        text = text.split(vowel).join('');
    }

    console.log(text);
}

vowelsRemove();
// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.

// const vowelsCount = () => {
//     let text = `
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe quas quasi exercitationem omnis dolore doloremque velit quisquam nulla beatae. Magnam sed officiis dolor porro quia inventore minus facilis laborum.
//     `;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i].toLowerCase();
//         let nextChar = text[i + 1].toLowerCase();

//         if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//             count++;
//             console.log(currentChar + nextChar)
//         }
//     }

//     console.log(`Number of occurrences of two vowels in succession: ${count}`);
// }

// vowelsCount();

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// const convertDistance = () => {
//     const distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

//     // Conversion factors
//     const meters = distanceKm * 1000;
//     const feet = distanceKm * 3280.84;
//     const inches = distanceKm * 39370.1;
//     const centimeters = distanceKm * 100000;

//     console.log(`Distance: ${distanceKm} kilometers`);
//     console.log(`Distance in meters: ${meters} meters`);
//     console.log(`Distance in feet: ${feet} feet`);
//     console.log(`Distance in inches: ${inches} inches`);
//     console.log(`Distance in centimeters: ${centimeters} centimeters`);
// }

// convertDistance();



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function overtime() {
    const hours = 40;
    const rate = 12;
    const overtime = hours * rate;
    console.log(overtime);
}
overtime()

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

const calculateCurrencyNotes = () => {
    const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

    let num100s = Math.floor(amountInHundreds); // Number of 100s notes
    let remainingAmount = amountInHundreds - num100s; // Remaining amount after counting 100s notes

    let num50s = Math.floor(remainingAmount / 0.5); // Number of 50s notes
    remainingAmount -= num50s * 0.5; // Remaining amount after counting 50s notes

    let num10s = Math.floor(remainingAmount / 0.1); // Number of 10s notes

    console.log(`Number of 100s notes: ${num100s}`);
    console.log(`Number of 50s notes: ${num50s}`);
    console.log(`Number of 10s notes: ${num10s}`);
}

calculateCurrencyNotes();



// EVENTS

// 1. Show an alert box on click on a link.
const link = document.getElementById("link")
link.addEventListener('click', function () {
    alert('Link is not available')
})
// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.
const images = document.querySelectorAll("#images img")
images.forEach((elem) => {
    elem.addEventListener('click', function () {
        alert("You purchased this phone!")
    })

})
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
const deleteBtn = document.querySelectorAll("button")
const tableRows = document.querySelectorAll("tbody tr")

deleteBtn.forEach((elem, index) => {
    elem.addEventListener('click', function () {
        tableRows[index].remove()
    })
})
// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

const imagesMouseEfect = document.querySelector("#imagesMouseEffect img")
imagesMouseEfect.addEventListener('mouseover', function () {
    imagesMouseEfect.src = "images/dragon1.webp"
})
imagesMouseEfect.addEventListener('mouseout', function () {
    imagesMouseEfect.src = "images/dragon.jpg"
})

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

const countInput = document.querySelector("#count")
const incrementCounter = document.getElementById("incrementCounter")
const decrementCounter = document.getElementById("decrementCounter")

incrementCounter.addEventListener('click', function () {
    countInput.value++
})
decrementCounter.addEventListener('click', function () {
    if (countInput.value > 0) {
        countInput.value--
    }
})