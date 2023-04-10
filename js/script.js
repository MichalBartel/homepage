let changeBackgroundButton =
    document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--dark")

    nextColorName.innerText = body.classList.contains("body--dark") ? "białe" : "szare";
});