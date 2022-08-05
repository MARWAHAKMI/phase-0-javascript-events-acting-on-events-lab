// Your code here
// function moveDodgerLeft() {
//     const dodger = document.getElementById('dodger')
//     dodger.style.left = '80px'
// }

// function moveDodgerRight() {
//     const dodger = document.getElementById('dodger')
//     dodger.style.left = '300px'
// }


// moveDodgerLeft()
// moveDodgerRight()

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})
function moveDodgerLeft() {
    const l = dodger.style.left.replace("px", "")
    const left = parseInt(l, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
function moveDodgerRight() {
    const l = dodger.style.left.replace("px", "")
    const left = parseInt(l, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}