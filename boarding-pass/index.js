const bottom = document.querySelector(".bottom");
const middle = document.querySelector(".middle");

const highlightTicket = (element) => {
    element.style.transform = "translateY(1rem)";
    element.style.marginBottom = "1rem";
}

bottom.addEventListener("click", () => {
    highlightTicket(bottom)
})

middle.addEventListener("click", () => {
    highlightTicket(middle)
})