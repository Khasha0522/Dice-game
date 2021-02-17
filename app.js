// тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж хадгалая
var activePlayer = 1;


//тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;


// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//window.document.querySelector('#score-0').textContent = dice;
//window.document.querySelector('#score-1').innerHTML = "<em> Yes ! </em>";

// Preparing to start programm
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDome = document.querySelector(".dice");

diceDome.style.display = "none";

document.querySelector('.btn-roll').addEventListener('click', function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDome.style.display = "block";
    diceDome.src = "dice-" + diceNumber + ".png";

});