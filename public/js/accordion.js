const accordion = document.querySelector("#more-form1");

accordion.addEventListener("click", function (e) {
    const form = e.target;
    form.classList.toggle("change");
    let panel = form.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
})
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
