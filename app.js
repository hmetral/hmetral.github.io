const menuBTN = document.querySelector("#menuBTN");
const openID= document.querySelector("#menuBTN");
const closeID = document.querySelector("#menuBTN");
const mobileNav = document.querySelector("#menuBTN");

function togglemenu() {
    const isExpanded = menuBTN.getAttribute("aria-expanded") === "true";
   
    menuBTN.setAttribute("aria-expanded", !isExpanded);

    mobileNav.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded){
        closeID.style.display = "block";
        openID.style.display = "none";
        mobileNav.classList.add("open");
    } else{
        closeID.style.display = "none";
        openID.style.display = "block";
        mobileNav.classList.remove("open");
    }
}

menuBTN.addEventListener ("click", () => {
    togglemenu();
});
