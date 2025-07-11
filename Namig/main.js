// Slideshow related logic

const headerSSImages = document.querySelectorAll(".heading-slideshow-cnr img")
const headerSSPaginationDots = document.querySelectorAll(".heading-slideshow-cnr .pagination-dot")
const headerSSPlantCategory = document.querySelectorAll(".heading-slideshow-cnr .plant-category")
const headerSSPlantName = document.querySelectorAll(".heading-slideshow-cnr .plant-name")
const headerSSNextButton = document.querySelector(".heading-slideshow-cnr .right-arrow-icon")

let currentSlideIndex = 0
let intervalId // to store interval reference

function showImage(currentSlideIndex) {
    headerSSImages.forEach((image, i) => {
        image.style.display = i === currentSlideIndex ? "block" : "none"
    })

    headerSSPaginationDots.forEach((dot, i) => {
        dot.style.width = i === currentSlideIndex ? "2.1rem" : "0.6rem"
        dot.style.borderRadius = i === currentSlideIndex ? "1000px" : "50%"
    })

    headerSSPlantCategory.forEach((category, i) => {
        category.style.display = i === currentSlideIndex ? "block" : "none"
    })

    headerSSPlantName.forEach((name, i) => {
        name.style.display = i === currentSlideIndex ? "block" : "none"
    })
}

function startSlideshow() {
    intervalId = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % headerSSImages.length
        showImage(currentSlideIndex)
    }, 5000)
}

function resetSlideshowTimer() {
    clearInterval(intervalId)
    startSlideshow()
}

showImage(currentSlideIndex)
startSlideshow()

headerSSNextButton.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % headerSSImages.length
    showImage(currentSlideIndex)
    resetSlideshowTimer()
})


// Basket related logic

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



const bestO2PaginationDots = document.querySelectorAll(".bo2-pagination-cnr .pagination-dot");
const prevButton = document.querySelector(".prev-btn")
const nextButton = document.querySelector(".next-btn")
const plantNumberCnr = document.querySelector(".plant-number-cnr")
const plantImages = document.querySelectorAll(".bo2-main img")
console.log(plantImages)
let currentPlantIndex = 0;

function generatePlantNumber(currentPlantIndex) {
    // padstart function adds "0" before number until it reaches two digit length
    plantNumberCnr.textContent = `${String(currentPlantIndex + 1).padStart(2, "0")}` + "/04"
}