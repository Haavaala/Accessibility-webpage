    const button = document.querySelector(".dropbtn");
    const navbarLinks = document.querySelector(".dropdown-content");
    const Abutton = document.querySelector(".Idyll");
    const idyll = document.querySelector(".popupIdyll");
    const closePopup = document.querySelector(".close-popup");
    const pizzaButton = document.querySelector(".pizza");
    const stektPizza = document.querySelector(".stektPizza");


    //Open the navbar on smaller screens when pressing the menu button
    button.addEventListener("click", () =>{
        navbarLinks.classList.toggle("active");
    })

    //Open the popup for the idyll
    Abutton?.addEventListener("click", () =>{
        idyll.classList.toggle("active");
    })

    //Close the popup for the idyll
    closePopup?.addEventListener("click", () =>{
        idyll.classList.remove("active");
    })

    //Open the lyrics for the audio file
    pizzaButton.addEventListener("click", () =>{
        stektPizza.classList.toggle("active");
    })