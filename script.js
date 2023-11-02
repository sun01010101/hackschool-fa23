/*Create an array of random sentences. 
Then use a function to loop through the array to modify it by either adding or removing sentences. 
Keep a count of how many sentences were modified and return that value.*/

/*let a1 = ["kiran", "andrew", "srikar", "rishab"];

function getNames(a1) {
    let count = 0;
    for(let i = 0; i < a1.length; i++) {
        a1[i] += " sucks";
        count++;
    }
    return count;
}

const numOfMod = getNames(a1);
console.log(a1);*/

async function activity(value) {
    let wpm = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value >= 80) {
                resolve("I practiced every day");
            }
            else {
                reject("I practiced every day");
            }
        }, 2000);
    });
    return wpm;
}

activity(70)
    .then(() => {
        console.log("I reached my goal");
    })
    .catch(() => {
        console.log("I failed")
    })



