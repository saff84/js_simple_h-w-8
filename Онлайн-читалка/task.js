let sizesText = document.querySelector(".book__control_font-size"),
childsSizesText = sizesText.querySelectorAll(".font-size");

// aktiv = document.querySelector(".font-size_active");

let book = document.querySelector(".book"),
color = document.querySelector(".book__control_color"),
childsColor = color.querySelectorAll("a"),
colorBackground = document.querySelector(".book__control_background"),
childsBackColor = colorBackground.querySelectorAll("a");


sizesText.forEach((el) => {
    el.addEventListener("click", (event) => {
        book.classList.remove(`book_fs-${sizesText.querySelector(".font-size_active").dataset.size}`)
        sizesText.querySelector(".font-size_active").classList.remove("font-size_active")        

        el.classList.add("font-size_active")
        if (el.classList.contains("font-size_small")){
            book.classList.add(`book_fs-${el.dataset.size}`)
            // book.classList.remove("book_fs-big")
        } else if (el.classList.contains("font-size_big")){
            book.classList.add(`book_fs-${el.dataset.size}`)
            // book.classList.remove("book_fs-small")
        } else {
            book.classList.remove("book_fs-big")
            book.classList.remove("book_fs-small")
        }

        event.preventDefault();
})
})

// function delActivity(){
//     size.forEach((el) => {
//         el.classList.remove("font-size_active")
//     })
// }


childsColor.forEach((el) => {
    el.addEventListener("click", (event) => {
        book.classList.remove(`book_color-${color.querySelector(".color_active").dataset.textColor}`)
        color.querySelector(".color_active").classList.remove("color_active")
        
        el.classList.add("color_active")
        if (el.classList.contains("text_color_black")){
            book.classList.add(`book_color-${el.dataset.textColor}`)
        } else if (el.classList.contains("text_color_gray")){
            book.classList.add(`book_color-${el.dataset.textColor}`)
        } else {
            book.classList.add(`book_color-${el.dataset.textColor}`)
        }

        event.preventDefault();
    })
})