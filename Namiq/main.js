const headerSSImages = document.querySelectorAll(".heading-slideshow-cnr img")
const headerSSPaginationDots = document.querySelectorAll(".heading-slideshow-cnr .pagination-dot")
const headerSSPlantCategory = document.querySelectorAll(".heading-slideshow-cnr .plant-category")
const headerSSPlantName = document.querySelectorAll(".heading-slideshow-cnr .plant-name")
const headerSSNextButton = document.querySelector(".heading-slideshow-cnr .right-arrow-icon")

let current = 0
let intervalId // to store interval reference

function showImage(current) {
    headerSSImages.forEach((image, i) => {
        image.style.display = i === current ? "block" : "none"
    })

    headerSSPaginationDots.forEach((dot, i) => {
        dot.style.width = i === current ? "2.1rem" : "0.6rem"
        dot.style.borderRadius = i === current ? "1000px" : "50%"
    })

    headerSSPlantCategory.forEach((category, i) => {
        category.style.display = i === current ? "block" : "none"
    })

    headerSSPlantName.forEach((name, i) => {
        name.style.display = i === current ? "block" : "none"
    })
}

function startSlideshow() {
    intervalId = setInterval(() => {
        current = (current + 1) % headerSSImages.length
        showImage(current)
    }, 5000)
}

function resetSlideshowTimer() {
    clearInterval(intervalId)
    startSlideshow()
}

showImage(current)
startSlideshow()

headerSSNextButton.addEventListener("click", () => {
    current = (current + 1) % headerSSImages.length
    showImage(current)
    resetSlideshowTimer()
})


// basket related logic

const addedItemsContainer = document.querySelector(".added-items-count");
const basketButtons = document.querySelectorAll(".basket-btn");

addedItemsContainer.textContent = 0;

basketButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("added");

        const addedItemsCount = document.querySelectorAll(".basket-btn.added").length;
        addedItemsContainer.textContent = addedItemsCount;
    });
});