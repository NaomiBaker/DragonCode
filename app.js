
//user = amount dmg user can take dragon = amount dmg dragon can take
let user = 5;
let dragon = 10;

//ask user number of hits
//question= number of hits, hits= randomized number
while(user >0 && dragon>0) {
    let question = prompt("How many times will you hit the dragon?");
    let hits = Math.floor(Math.random() * (question - 1 + 1)) + 1;
    if (hits > 5) {
        dragon -= 1;
    }
else if (hits >0 && hits <= 5) {
        dragon -= hits;
    }
// D = dragon hit
let D = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
user -= D;

let result;

if(user === 0){
    result = ("You have Died");
}
else if (dragon === 0) {
    result = ("You have Won!");
}




document.body.innerHTML=result}





