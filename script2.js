document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel_item")

    const buttons = carousel.querySelectorAll(".button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("item1"));
            // buttons.forEach

            items[i].classList.add("item1");
        });
    });
});