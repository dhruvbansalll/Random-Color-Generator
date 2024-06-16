const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let btn = document.getElementById("btn");
let colorSpan = document.querySelector(".color")
btn.addEventListener("click", function() {
    let hexColor =  '#'
    for(let i=0; i<6; i++){
        hexColor += hexCode[getRandomNumber()];
    }
    colorSpan.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
function getRandomNumber() {
    return Math.ceil(0 + (100-(100-(15-0)))*Math.random())
}