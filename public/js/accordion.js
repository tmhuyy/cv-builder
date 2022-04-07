const accordionBtn = document.querySelectorAll(".accordion");

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function () {
        accordionBtn[i].classList.toggle("change");
        let panel = accordionBtn[i].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
