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
    const bmiMark = (markWeightKg / markHeightM ** 2).toFixed(2);
    const bmiJohn =  (johnWeightKg / johnHeightM ** 2).toFixed(2);
    let isMarkHigherBmi;

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

console.log(`BMI Comparison - Variation 1 - ${compareBmiVariation1(78, 1.69, 92, 1.95)}`);
console.log(`BMI Comparison - Variation 2 - ${compareBmiVariation2(95, 1.88, 85, 1.76)}`);

// ------------------------------------------------------------------------------------------
// Challenge 3, Mark and John are trying to compare their BMI 
