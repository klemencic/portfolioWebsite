function toggleDropdown() {
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".dropdownIcon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}