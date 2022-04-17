const removeField3 = document.querySelector("#remove3");
const addField3 = document.querySelector("#add3")
let count = 1;
removeField3.addEventListener("click", function () {
    const accordion3 = document.querySelectorAll("#accordion3");
    if (accordion3.length > 1) {
        count--;
        accordion3[accordion3.length - 1].remove();
    }
});
addField3.addEventListener("click", function () {
    const label = document.querySelectorAll("#label");
    const link = document.querySelectorAll("#link");

    for (let i = 0; i < label.length; i++) {
        label[i].setAttribute("value", label[i].value);
        link[i].setAttribute("value", link[i].value);
    }
    count++;
    const title =
        '<div id="accordion3">\
    <button type="button" class="accordion">\
        Section' +
        count +
        '\
    </button>\
    <div class="panel">\
        <div class="form-group">\
            <label for="label">Label</label>\
            <input\
                type="text"\
                name="link_label"\
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
                name="link"\
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
    moreForm[2].innerHTML += title;
});
