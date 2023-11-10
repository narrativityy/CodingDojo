/*
  Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

// RIOT

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null
const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null

// PSUDOCODE
// create an empty array variable to store the potential medications
// create a for loop to loop through the objects
    // create a for loop for the ailments array
        // check if treatableSymptoms array includes one of the ailments
            // if so add medication to anwswer array

function webMD(ailments, meds) {
    let potentialAnswerArray = []

    for (let i = 0; i < meds.length; i++) {
        for (let j = 0; j < ailments.length; j++) {
            if (meds[i].treatableSymptoms.includes(ailments[j])) {
                potentialAnswerArray.push(meds[i])
                break;
            }
        }
    }

    if (potentialAnswerArray.length === 0)
        return null

    let frequencyArr = []
    for (let i = 0; i < potentialAnswerArray.length; i++) {
        frequencyArr[i] = 0
        for (let j = 0; j < ailments.length; j++) {
            if (potentialAnswerArray[i].treatableSymptoms.includes(ailments[j]))  {
                frequencyArr[i]++
            }
        }
    }

    let answerArr = []
    for (let i = 0; i < frequencyArr.length; i++) {
        if (frequencyArr[i] === ailments.length)
            answerArr.push(potentialAnswerArray[i].name)
    }

    if (answerArr.length === 0) {
        return potentialAnswerArray
    }

    return answerArr
 }

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));