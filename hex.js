const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');





//console.log(hex[1])
//console.log(hex.length)
btn.addEventListener('click',function (){
    let hexColor =['#'];

    for(let i =0; i<6; i++){
        hexColor.push(hex[randnum()])
    }
    const cols = hexColor.join('');
    
    color.textContent = cols;
    document.body.style.backgroundColor = cols;
    console.log(cols)
    
} )
const  randnum = ()=> Math.floor(Math.random()*hex.length);








