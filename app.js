const menuBTN = document.querySelector("#menuBTN");
const openID= document.querySelector("#openID");
const closeID = document.querySelector("#closeID");
const mobilenav = document.querySelector("#mobilenav");
const mobileLinks = mobilenav.querySelectorAll("a");

function togglemenu() {
    const isExpanded = menuBTN.getAttribute("aria-expanded") === "true";
   
    menuBTN.setAttribute("aria-expanded", !isExpanded);

    mobilenav.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded){
        closeID.style.display = "block";
        openID.style.display = "none";
        mobilenav.classList.add("open");
    } else{
        closeID.style.display = "none";
        openID.style.display = "block";
        mobilenav.classList.remove("open");
    }
}

menuBTN.addEventListener ("click", () => {
    togglemenu();
});

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if(mobilenav.classList.contains("open")){
            togglemenu();
        }
    });
});
