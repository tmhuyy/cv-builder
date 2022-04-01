// const accordionBtn = document.getElementsByClassName("accordion");
// for (let i = 0; i < accordionBtn.length; i++) {
//     accordionBtn[i].addEventListener("click", function () {
//         accordionBtn[i].classList.toggle("change");
//         let panel = accordionBtn[i].nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

const change = function () {
    const accordionBtn = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].classList.toggle("change");
        let panel = accordionBtn[i].nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
};

// function change() {
//     const accordionBtn = document.querySelector(".accordion");
//     accordionBtn.classList.toggle("change");
//     let panel = accordionBtn.nextElementSibling;
//     if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//     } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//     }
// }
