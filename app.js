// тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж хадгалая
var activePlayer = 1;


//тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;


// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

//window.document.querySelector('#score-0').textContent = dice;
//window.document.querySelector('#score-1').innerHTML = "<em> Yes ! </em>";

// Preparing to start programm
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector(".dice").style.display = "none";

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;


console.log("Шоо : " + dice);