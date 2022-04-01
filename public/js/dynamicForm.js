const fieldSet = document.querySelector(".card");
const addField = document.querySelector("#add");
const removeField = document.querySelector("#remove");

addField.addEventListener("click", () => {
    console.log("add");
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
