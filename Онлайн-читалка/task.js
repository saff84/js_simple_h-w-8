let sizesText = document.querySelector(".book__control_font-size"),
childsSizesText = sizesText.querySelectorAll(".font-size");

let book = document.querySelector(".book"),
color = document.querySelector(".book__control_color"),
childsColor = color.querySelectorAll("a"),
colorBackground = document.querySelector(".book__control_background"),
childsBackColor = colorBackground.querySelectorAll("a");


childsSizesText.forEach((el) => {
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

childsBackColor.forEach((el) => {
    el.addEventListener("click", (event) => {
        book.classList.remove(`book_bg-${colorBackground.querySelector(".color_active").dataset.bgColor}`)
        colorBackground.querySelector(".color_active").classList.remove("color_active")
        
        el.classList.add("color_active")
        if (el.classList.contains("text_color_black")){
            book.classList.add(`book_bg-${el.dataset.bgColor}`)
        } else if (el.classList.contains("text_color_gray")){
            book.classList.add(`book_bg-${el.dataset.bgColor}`)
        } else {
            book.classList.add(`book_bg-${el.dataset.bgColor}`)
        }

        event.preventDefault();
    })
})