const accordionEvents = document.getElementsByClassName("accordion-title");
const accordionItems = document.getElementsByClassName("accordion-items");

Array.from(accordionItems).forEach(item => {
    const content = item.querySelector('.accordion-text');
    content.style.display = "none";
});

function showAcc(event) {
    const item = event.target.closest('.accordion-items');
    const content = item.querySelector('.accordion-text');
    const icon = item.querySelector('.icon-img-button');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        item.style.background = "#b9ff66";
        icon.src = "./Img/Minus icon.png"; 
    } else {
        content.style.display = "none";
        item.style.background = "";
        icon.src = "./Img/Plus icon.png";
    }
}

Array.from(accordionEvents).forEach(element => {
    element.addEventListener("click", showAcc);
});
Array.from(document.getElementsByClassName("accordion-icon")).forEach(element => {
    element.addEventListener("click", showAcc);
});

window.addEventListener("scroll", function() {
    const header = document.querySelector(".header-navigation");
    const headerContent = document.querySelector(".header-content");
    if (window.scrollY > 6) {
      header.classList.add("sticky");
      headerContent.style.marginTop = "140px"
      header.classList.remove("notransition")
    } else {
      header.classList.remove("sticky");
      headerContent.style.marginTop = "";
    }

    if(window.scrollY <= 5 ){
        header.classList.add("notransition")
    }
  });