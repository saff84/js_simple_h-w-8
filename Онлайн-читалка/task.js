let size = document.querySelectorAll(".font-size"),
aktiv = document.querySelector(".font-size_active");

let book = document.querySelector(".book"),
color = document.querySelectorAll(".book__control_color"),
colorBackground = document.querySelectorAll(".book__control_background")



size.forEach((el) => {
    el.addEventListener("click", (event) => {
        delActivity()
        aktiv.classList.remove("font-size_active")
        el.classList.add("font-size_active")
        if (el.classList.contains("font-size_small")){
            book.classList.add("book_fs-small")
            book.classList.remove("book_fs-big")
        } else if (el.classList.contains("font-size_big")){
            book.classList.add("book_fs-big")
            book.classList.remove("book_fs-small")
        } else {
            book.classList.remove("book_fs-big")
            book.classList.remove("book_fs-small")
        }

        event.preventDefault();
})
})

function delActivity(){
    size.forEach((el) => {
        el.classList.remove("font-size_active")
    })
}
