// ------------------------------------------------------------------------------------------
// Validation form
class User {
    static latestId = 0; // Static variable to store the latest id value
    static allIds = []; // Static array to store all the IDs

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = User.incrementId();
        
    }
    static incrementId() {
        // console.log(`${User.latestId}`);
        User.latestId = User.latestId + 1;
        // console.log(`${User.latestId}`);
        User.allIds.push(User.latestId); // Add the ID to the array
        // console.log(`All IDs inside incrementId(): ${User.getAllIds()}`)
        return User.latestId; 
    }

    static getAllIds() {
        return User.allIds; // Return the array of all IDs
    }

    getId() {
        return this.id;
    }
    getName() {
            return this.name;
        }
    getEmail() {
            return this.email;
        }
    }

window.onload = displayStoredData;

function displayStoredData() {
    let allIds = User.getAllIds();
    console.log(`All IDs: ${allIds}`)
    allIds.forEach((id) => {
        console.log(`this user id is ${id}`)
        let userDetails = JSON.parse(localStorage.getItem(id));
        if (userDetails) {
            let userName = userDetails[0];
            let userEmail = userDetails[1];
            let ul = document.getElementById('ul');
            let li = document.createElement('li');
            li.innerHTML = `<strong>${userName}</strong>: ${userEmail}`;
            ul.appendChild(li);
        }
    })
}

function submitForm(event) {
    event.preventDefault();

    let userName = document.getElementById('name');
    let userEmail = document.getElementById('email');

    if (userName.value === '') {
        alert('Please, enter user name');
        return;
    }

    if (userEmail.value === '') {
        alert('Please, enter user email');
        return;
    }

    // if we have both name and email, add both to storage and clear input fields
    if(userName && userEmail) {
        let user = new User(userName.value, userEmail.value);
        addToStorage(user);
        userName.value = '';
        userEmail.value = '';
    } else {
        error('There is an error with either user name or user email');
    }
}

//Store user name and user email in local storage
function addToStorage(user) {
    let userId = user.getId();
    let userDetails = [user.getName(), user.getEmail()]
    // set user name and user email to store locally
    localStorage.setItem(userId, JSON.stringify(userDetails));

    // create new list item in unordered list
    let ul = document.getElementById('ul'); 
    let li = document.createElement('li');

     // add inner HTML and append to the list
    li.innerHTML = `<strong>${user.getName()}</strong>: ${user.getEmail()}`;
    ul.appendChild(li);
   }

// Open or close the hidden list with registered users
function showRegisteredUsers() {
    const collapsible = document.querySelector('.collapsible-users');
    let collapsibleStyle = window.getComputedStyle(collapsible);

    collapsibleStyle.display === 'none' ? collapsible.style.display = 'block': collapsible.style.display = 'none';
}

// ------------------------------------------------------------------------------------------
// Challenge 1 && 2, Mark and John are trying to compare their BMI 

//Initialize height and weight for Mark
let markWeightKg;
let markHeightM;

//Initialize height and weight for John
let johnWeightKg;
let johnHeightM;

// Compare their BMI - Variation 1 - BMI = mass / height ** 2
function compareBmiVariation1(markWeightKg, markHeightM, johnWeightKg, johnHeightM) {
    // Initialize a variable to store a boolean determining whether Mark has a higher BMI
    let isMarkHigherBmi;

    const bmiMark = (markWeightKg / markHeightM ** 2).toFixed(2);
    const bmiJohn =  (johnWeightKg / johnHeightM ** 2).toFixed(2);

    // Add a well-formatted output checking whether Marks BMI is higher 
    if(bmiMark > bmiJohn) {
        isMarkHigherBmi = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
    }else {
        isMarkHigherBmi = `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`;
    }

    return isMarkHigherBmi;
}

// Compare their BMI - Variation 2 - BMI = mass / (height * height) 
function compareBmiVariation2(markWeightKg, markHeightM, johnWeightKg, johnHeightM) {
    const bmiMark = (markWeightKg / (markHeightM * markHeightM)).toFixed(2);
    const bmiJohn =  (johnWeightKg / (johnHeightM * johnHeightM)).toFixed(2);
    let isMarkHigherBmi;

    // Add a well-formatted output checking whether Marks BMI is higher 
    if(bmiMark > bmiJohn) {
        isMarkHigherBmi = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
    }else {
        isMarkHigherBmi = `John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`;
    }

    return isMarkHigherBmi;
}
console.log('---Challenge 1 && 2-------------------------------------------------------')
console.log(`BMI Comparison - Variation 1 - ${compareBmiVariation1(78, 1.69, 92, 1.95)}`);
console.log(`BMI Comparison - Variation 2 - ${compareBmiVariation2(95, 1.88, 85, 1.76)}`);
console.log('--------------------------------------------------------------------------')

// ------------------------------------------------------------------------------------------
// Challenge 3, Dolphins and Koalas gymnastics teams

// Declare and define a function that will compute average scores for each team, 
// as well as output game result
function determineWinner(teamScore1, teamName1, teamScore2, teamName2) {
    //calculate team1 average score
    let teamTotal1 = 0;
    teamScore1.forEach((teamScore) => {
        teamTotal1 += teamScore;
    })

    // calculate team2 average score
    let teamTotal2 = 0;
    teamScore2.forEach((teamScore) => {
        teamTotal2 += teamScore;
    })

    // determine winner
    if(teamTotal1 === teamTotal2) {
        console.log('It is a draw!');
    } else if(teamTotal1 > teamTotal2) {
        console.log(`${teamName1} won with ${teamTotal1} score against ${teamName2} with ${teamTotal2} score!`);
    } else if(teamTotal2 > teamTotal1) {
        console.log(`${teamName2} won with ${teamTotal2} score against ${teamName1} with ${teamTotal1} score!`);
    }
}

console.log('---Challenge 3 Task 1:----------------------------------------------------')
determineWinner([98, 108, 89], 'Dolphines', [88, 91, 110], 'Koalas');
console.log('--------------------------------------------------------------------------')

// Challenge 3 Bonus 1 - include a minimum score requirement for each game

function determineWinnerMin100(teamScore1, teamName1, teamScore2, teamName2) {

    // initialize a variable to store the amount of games each team won
    let teamWins1 = 0;  
    let teamWins2 = 0; 

    // loop through scores and compare each by each considering a minimum score of 100 
    // for each game
    for (let i = 0; i < teamScore1.length; i++) {
        if (teamScore1[i] > 100 && teamScore1[i] > teamScore2[i]) {
            teamWins1 += 1;
        } else if (teamScore2[i] > 100 && teamScore2[i] > teamScore1[i]) {
            teamWins2 += 1;
        }
    }

    // determine winner
    if (teamWins1 === teamWins2) {
        console.log('It is a draw!');
    } else if(teamWins1 > teamWins2) {
        console.log(`${teamName1} won, ${teamWins1}-${teamWins2} !`);  
    } else {
        console.log(`${teamName2} won, ${teamWins2}-${teamWins1} !`);
    }
}

console.log('---Challenge 3 Bonus 1:----------------------------------------------------')
determineWinnerMin100([97, 112, 101], 'Dolphines', [109, 95, 123], 'Koalas');
console.log('---------------------------------------------------------------------------')

// Challenge 3 Bonus 2 - include a minimum score requirement for a draw

//Declare and define a function that will compare scores each by each and consider
// a minimum score of 100 points
function determineWinnerMinDraw(teamScore1, teamName1, teamScore2, teamName2) {

    // initialize a variable to store the amount of games each team won
    let teamWins1 = 0;  
    let teamWins2 = 0; 

    // loop through scores and compare each by each considering a minimum score of 100 
    // and matching scores
    for (let i = 0; i < teamScore1.length; i++) {
        if (teamScore1[i] > 100 && teamScore1[i] === teamScore2[i]) {
            teamWins1 += 1;
        } else if (teamScore2[i] > 100 && teamScore2[i] === teamScore1[i]) {
            teamWins2 += 1;
        }
    }

    // determine winner
    if (teamWins1 === teamWins2) {
        console.log(`Both teams won ${teamWins1} games.`);
    } else if(teamWins1 > teamWins2) {
        console.log(`${teamName1} won, ${teamWins1}-${teamWins2}!`);  
    } else if(teamWins2 > teamWins1) {
        console.log(`${teamName2} won, ${teamWins2}-${teamWins1}!`);
    }
}

console.log('---Challenge 3 Bonus 2:----------------------------------------------------')
determineWinnerMinDraw([97, 112, 101], 'Dolphines', [109, 95, 106], 'Koalas');
console.log('---------------------------------------------------------------------------')

// ------------------------------------------------------------------------------------------
// Challenge 4, Steven builds a calculator

// Create a variable called 'tip', and then calculate the tip depending on the bill value
// Use a ternary operator
function calculateTip(billValue) {
    let tip; // initialize tip
    let total; // initialize a variable to store total bill value
    let result; // initialize a variable to store output result

    billValue >= 50 && billValue <= 300 ? tip = 15 : tip = 20; // calculate tip based on bill value

    total = (tip/100) * billValue + billValue; // calculate total bill value

    //define output
    result = `
            Bill total: ${billValue.toFixed(2)} $\n 
            Tip: ${tip}%\n
            Total value: ${total.toFixed(2)} $`;

    console.log(result);
    console.log('-----------------------------')
}

console.log('---Challenge 4:------------------------------------------------------------');
calculateTip(275);
calculateTip(40);
calculateTip(430);
console.log('---------------------------------------------------------------------------');

