const menu = document.querySelector("#menu-tlacitko")

const clickMenu = menu.addEventListener("click", (e) => {

    let menuPolozky = document.querySelector("#menu-polozky");

    if (menuPolozky.classList.contains("show")) {
        menuPolozky.classList.remove("show");
        menu.innerHTML = '<i class="fa fa-bars"></i>';
    } else {
        menuPolozky.classList.add("show");
        menu.innerHTML = '<i class="fa fa-xmark"></i>';
    }
});