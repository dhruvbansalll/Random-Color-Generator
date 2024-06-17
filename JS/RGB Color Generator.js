let btn = document.getElementById("btn");
let colorSpan = document.querySelector(".color")
btn.addEventListener("click", function() {
    let rgbColor =  `RGB(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`
    colorSpan.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor;
})
function getRandomNumber() {
    return Math.ceil(0 + (100-(100-(255-0)))*Math.random())
}
