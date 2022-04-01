const addField3 = document.querySelector("#add3");
const removeField3 = document.querySelector("#remove3");
let count = 0;
removeField3.addEventListener("click", function () {
    const accordion3 = document.querySelectorAll("#accordion3");
    if (accordion3.length > 1) {
        count--;
        accordion3[accordion3.length - 1].remove();
    }
});

// remove_fields.onclick = function () {
//     const input_tags = survey_options.getElementsByTagName("input");
//     if (input_tags.length > 2) {
//         survey_options.removeChild(input_tags[input_tags.length - 1]);
//     }

addField3.addEventListener("click", function () {
    console.log("easj");
    const label = document.querySelectorAll("#label");
    const link = document.querySelectorAll("#link");

    for (let i = 0; i < label.length; i++) {
        label[i].setAttribute("value", label[i].value);
        link[i].setAttribute("value", link[i].value);
    }
    count++;
    console.log(count);
    const title =
        '<div id="accordion3">\
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
    const moreForm3 = document.querySelector("#more-form3");
    moreForm3.innerHTML += title;
    const closeForm3 = document.getElementsByClassName("accordion");

    for (let i = 0; i < closeForm3.length; i++) {
        closeForm3[i].classList.remove("change");
        let panel = closeForm3[i].nextElementSibling;
        panel.style.maxHeight = null;
    }
});
