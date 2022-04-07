const removeField2 = document.querySelector("#remove2");
removeField2.addEventListener("click", function () {
    const accordion2 = document.querySelectorAll("#accordion2");
    if (accordion2.length > 1) {
        accordion2[accordion2.length - 1].remove();
    }
});
// addField2.addEventListener("click", function () {
//     const projectName = document.querySelectorAll("#project_name");
//     // BUG textarea not have attribute value
//     const descriptionProject = document.querySelectorAll(
//         "#description_project"
//     );
//     const startDate = document.querySelectorAll("#start_date_project");
//     const endDate = document.querySelectorAll("#end_date_project");
//     for (let i = 0; i < projectName.length; i++) {
//         projectName[i].setAttribute("value", projectName[i].value);
//         descriptionProject[i].setAttribute(
//             "value",
//             descriptionProject[i].value
//         );
//         startDate[i].setAttribute("value", startDate[i].value);
//         endDate[i].setAttribute("value", endDate[i].value);
//     }
//     countStep++;
//     const title =
//         '<div id="accordion2">\
//     <button type="button" class="accordion">\
//         Section ' +
//         countStep +
//         '\
//     </button>\
//     <div class="panel">\
//         <div class="form-group">\
//             <label for="project_name">Project Title</label>\
//             <input\
//                 type="text"\
//                 name="project_name"\
//                 id="project_name"\
//                 placeholder=""\
//                 required\
//             />\
//             <i class="fas fa-check-circle"></i>\
//             <i class="fas fa-exclamation-circle"></i>\
//             <small>Error message</small>\
//         </div>\
//         <div class="form-group">\
//             <label>Start & End Date*</label>\
//             <div class="date">\
//                 <input\
//                     type="month"\
//                     name="start_project"\
//                     id="start_date_project"\
//                     required\
//                 />\
//                 <input\
//                     type="month"\
//                     name="end_project"\
//                     id="end_date_project"\
//                     required\
//                 />\
//                 <small>Error message</small>\
//             </div>\
//         </div>\
//         <div class="form-group">\
//             <label for="description_project">Description</label>\
//             <input\
//                 type="text"\
//                 id="description_project"\
//                 name="description_project"\
//                 placeholder="e.g Graduated with High Honors"\
//             />\
//             <i class="fas fa-check-circle"></i>\
//             <i class="fas fa-exclamation-circle"></i>\
//             <small>Error message</small>\
//         </div>\
//     </div>\
// </div>';
//     const moreForm2 = document.querySelector("#more-form2");
//     moreForm2.innerHTML += title;

//     const closeForm2 = document.getElementsByClassName("accordion");

//     for (let i = 0; i < closeForm2.length; i++) {
//         closeForm2[i].classList.remove("change");
//         let panel = closeForm2[i].nextElementSibling;
//         panel.style.maxHeight = null;
//     }
// });
