const fieldSet = document.querySelector(".card");
const addField = document.querySelector("#add");
const removeField = document.querySelector("#remove");
const p = document.createElement("p");
let count = 0;
addField.addEventListener("click", () => {
    count++;
    p.textContent = "hello";
    const moreForm = document.querySelector("#more-form");
    moreForm.appendChild(p);
});
removeField.addEventListener("click", () => {
    console.log("remove");
});

// remove_fields.onclick = function () {
//     const input_tags = survey_options.getElementsByTagName("input");
//     if (input_tags.length > 2) {
//         survey_options.removeChild(input_tags[input_tags.length - 1]);
//     }
// };
