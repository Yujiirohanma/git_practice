let exerciseOne = ["push-ups","squats","crunch","wall push-ups","lunges","leg raises","Calf raises"];
let exerciseTwo = ["30 sec standard plank","30 sec Wall sit","30 sec horse stance","1 min shoulder plank","1 min forearm plank"];

let num = Math.floor(Math.random()*40 + 10);

function generateExerciseOne(){
    let i = Math.floor(Math.random()*7);
    return exerciseOne[i];
};

function generateExerciseTwo(){
    let j = Math.floor(Math.random()*6);
    return exerciseTwo[j];
};


console.log(`You must do ${num} ${generateExerciseOne()} and ${generateExerciseTwo()}.`);