let randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6)+1);
// console.log(randomNumber1);
randomDice1 = "images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

let randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6)+1);
randomDice2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomNumber1 > randomNumber2)
{
    document.getElementById("winner").innerText = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.getElementById("winner").innerText = "Player 2 wins";
}
else
{
    document.getElementById("winner").innerText = "DRAW! PLEASE PLAY AGAIN!";
}