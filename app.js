const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const rand = randomNumb()

    document.body.style.backgroundColor = colors[rand]
    color.textContent = colors[rand]
})
const randomNumb =()=> Math.floor(Math.random()*colors.length)
