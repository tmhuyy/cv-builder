const addField = document.querySelector("#add3");
const removeField = document.querySelector("#remove");
let count = 0;
removeField.addEventListener("click", function () {
    console.log("remove");
});

// remove_fields.onclick = function () {
//     const input_tags = survey_options.getElementsByTagName("input");
//     if (input_tags.length > 2) {
//         survey_options.removeChild(input_tags[input_tags.length - 1]);
//     }

addField.addEventListener("click", function () {
    const label = document.querySelectorAll("#label");
    const link = document.querySelectorAll("#link");

    for (let i = 0; i < label.length; i++) {
        label[i].setAttribute("value", label[i].value);
        link[i].setAttribute("value", link[i].value);
    }
    count++;
    const title =
        '<div id="accordion">\
    <button type="button" class="accordion" onclick="change()">\
        Section' +
        count +
        '\
    </button>\
    <div class="panel">\
        <div class="form-group">\
            <label for="label">Label</label>\
            <input\
                type="text"\
                name="link_label' +
        count +
        '"\
                id="label"\
                required\
            />\
            <i class="fas fa-check-circle"></i>\
            <i class="fas fa-exclamation-circle"></i>\
            <small>Error message</small>\
        </div>\
        <div class="form-group">\
            <label for="link">Link</label>\
            <input\
                type="url"\
                name="link' +
        count +
        '"\
                id="link"\
                pattern="https://.*"\
                size="30"\
                required\
            />\
            <i class="fas fa-check-circle"></i>\
            <i class="fas fa-exclamation-circle"></i>\
            <small>Error message</small>\
        </div>\
    </div>\
</div>';
    const moreForm = document.querySelector("#more-form");
    moreForm.innerHTML += title;
    const closeForm = document.getElementsByClassName("accordion");

    for (let i = 0; i < closeForm.length; i++) {
        closeForm[i].classList.remove("change");
        let panel = closeForm[i].nextElementSibling;
        panel.style.maxHeight = null;
    }
});
