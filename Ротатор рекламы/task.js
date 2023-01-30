const adv = document.querySelectorAll(".rotator__case")

let counter = 0
let timer = 1000

function rotator(index) {
    adv.forEach((el) => {
        el.classList.remove("rotator__case_active")
    })
    adv[index].classList.add("rotator__case_active")
    adv[index].style.color = adv[index].dataset.color
    counter++
    return timer = adv[index + 1].dataset.speed
    
}
console.log(adv[counter + 1].dataset.speed)
console.log(counter)
setInterval(() => {
    if (counter === 6) {
        counter = 0
        rotator(counter)
        return
    }

    console.log(timer)
console.log(counter)

    rotator(counter)
}, timer)






