/* Assigning the variable container to the element with the id of container. */
let container = document.getElementById("container"),
  /* Assigning the variable cards to the elements with the class of col-sm-4. */
  cards = document.getElementsByClassName("col-sm-4"),
  /* Assigning the variable wrapper to the element with the id of row. */
  wrapper = document.getElementById("row"),
  /* The configuration for the swiper. */
  config = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
  },
  swiper;

/**
 * If the screen is greater than 991px, remove the swiper classes and add the row class. If the screen
 * is less than 991px, add the swiper classes and remove the row class
 * @returns undefined.
 */
function mediaScreen() {
  if (window.innerWidth > 991) {
    container.classList.remove("swiper-container");
    wrapper.classList.remove("swiper-wrapper");
    wrapper.classList.add("row");
    for (let index = 0; index < cards.length; index++) {
      cards[index].classList.remove("swiper-slide");
      if (index === 1) cards[index].classList.add("scale");
    }
    return;
  }

  wrapper.classList.add("swiper-wrapper");
  wrapper.classList.remove("row");
  container.classList.add("swiper-container");
  for (let index = 0; index < cards.length; index++) {
    cards[index].classList.add("swiper-slide");
    if (index === 1) cards[index].classList.remove("scale");
  }
}

/* Calling the function. */
mediaScreen();

/* Listening for the window to resize and then calling the mediaScreen function. */
window.addEventListener("resize", mediaScreen);

swiper = new Swiper(".swiper-container", config);

function getDetails(p) {
  let content = document.getElementsByClassName("content"),
    children = content[p].children;

  alert(
    `
    Nombre plato: ${children[0].children[0].innerText}

    foto

    Ref: ${children[0].children[1].innerText}

    descripción: Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Qui Dexercitationem id aperiam. Iste perspiciatis dignissimos
    ad, ea, non qui sapiente omnis labore commodi ut voluptates,
    molestiae unde optio aut vel?
    
    precio: ${children[1].children[0].innerText}
    `
  );
}
