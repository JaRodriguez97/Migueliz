/* Listening for the window to resize and then calling the mediaScreen function. */
let containerMap = document.getElementsByClassName("containerMap"),
  container = document.getElementsByClassName("container"),
  slicerContainerMap = document.createElement("div"),
  iframe = document.getElementById("map"),
  url = location.search,
  params = new URLSearchParams(url),
  variable = params.get("variable"),
  coords = JSON.parse(variable);

window.addEventListener("resize", mediaScreen);

navigator.geolocation.getCurrentPosition((e) => {
  iframe.setAttribute(
    "src",
    `https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63722.35692481782!2d
  -76.53861581049388!3d3.4357090597903213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d${e.coords.latitude}426!2d
  ${e.coords.longitude}3589999999!4m5!1s0x8e30a870cbef36f9%3A0x942af3718e0f286b!2smigueliz%20burgers!3m2!1d3.4875951!2d
  -76.48926949999999!5e0!3m2!1ses!2sco!4v1665963554998!5m2!1ses!2sco`
  );
});

function mediaScreen() {
  for (let index = 0; index <= containerMap.length; index++) {
    let containerMapI = containerMap[index];

    if (!containerMapI) return;

    if (window.innerWidth > 991) {
      for (let i = 0; i <= container.length; i++) {
        let ele = container[i];
        if (ele) ele.appendChild(containerMapI);
      }
      return;
    }

    slicerContainerMap.classList.add("slicerContainerMap");
    slicerContainerMap.appendChild(containerMapI);
    for (let i = 0; i < container.length; i++) {
      let ele = container[i];
      if (ele) ele.appendChild(slicerContainerMap);
    }
  }
}

/* Calling the function. */
mediaScreen();

function getTienda(ubicacion) {
  slicerContainerMap.classList.add("active");

  if (slicerContainerMap.innerHTML.indexOf(ubicacion) === -1) {
    slicerContainerMap.innerHTML += `<p>¿Cómo llegar a ${ubicacion}?</p>`;

    container[0].onclick = outMap;
  }
}

function outMap() {
  slicerContainerMap.classList.remove("active");
}
