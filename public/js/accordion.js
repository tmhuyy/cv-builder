const accordions = document.querySelectorAll("#more-form");
for (let accordion of accordions) {
    accordion.addEventListener("click", function (e) {
        if (e.target.nodeName === "BUTTON") {
            const form = e.target;
            let panel = form.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
        
    })
}

// for (let accordionBtn of accordionBtns) {
//     accordionBtn.addEventListener("click", function () {
//         this.classList.toggle("change");
//         let panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }
