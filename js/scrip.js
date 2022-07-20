const imgItem = document.querySelectorAll(".wrap img")

let index = 0;
let imgLeng = imgItem.length
imgItem.forEach(function(image, index) {
    image.style.left = index * 100 + "%"
    dotItem[index].addEventListener("click", function() { slideRun(index) })
})

function slider() {
    index++;
    if (index >= imgLeng) { index = 0 }
    slideRun(index)
}
setInterval(slider, 5000)
const toP = document.querySelector(".wrapper")
window.addEventListener("scroll", function() {
    const X = this.pageYOffset;
    if (X > 1) { toP.classList.add("active") } else {
        toP.classList.remove("active")
    }
})