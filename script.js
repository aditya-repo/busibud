const carousel =document.querySelector(".carousel");
const arrowBtn = document.querySelectorAll(".arrow");
const cardWidth = carousel.querySelector(".carousel-card").offsetWidth + 18;

// on clicking the side arrow button, calling function to move the card left or right depending on clicks
arrowBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        console.log(cardWidth);
        carousel.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth;
    })
})
