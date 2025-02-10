document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".navigation__list--menu");
    const searchButton = document.querySelector(".navigation__list--srch");
    const menuDropdown = document.querySelector(".menu-dropdown");
    const searchBox = document.querySelector(".search-box");

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation(); 
        menuDropdown.style.display = menuDropdown.style.display === "block" ? "none" : "block";
    });

    searchButton.addEventListener("click", function (event) {
        event.stopPropagation();
        searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
        menuDropdown.style.display = "none";
        searchBox.style.display = "none";
    });

    menuDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    searchBox.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
