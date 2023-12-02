const fs = require('fs');

const input: String = fs.readFileSync('input.txt', 'utf8');


const calorieArray: Array<String> = input.split(/\n\s*\n/)


console.log(input);
