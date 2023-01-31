
function rotator(interv) {
    clearInterval(interv)
    const activEl = document.querySelector(".rotator__case_active"),
        next = activEl.nextElementSibling !== null ? activEl.nextElementSibling : document.querySelector(".rotator__case");
    let time = activEl.dataset.speed;
    console.log(time)
    activEl.style.color = activEl.dataset.color


    interval(activEl, next, time)

}

function interval(activEl, next, time) {

    interv = setInterval(() => {
        activEl.classList.remove("rotator__case_active")
        next.classList.add("rotator__case_active")
        rotator(interv)
    }, time)

}
rotator()