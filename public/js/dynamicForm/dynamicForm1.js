const addField1 = document.querySelector("#add1");
const removeField1 = document.querySelector("#remove1");
let counter = 0;
removeField1.addEventListener("click", function () {
    const accordion1 = document.querySelectorAll("#accordion1");
    console.log("hello");
    if (accordion1.length > 1) {
        counter--;
        accordion1[accordion1.length - 1].remove();
    }
});
addField1.addEventListener("click", function () {
    const schoolName = document.querySelectorAll("#school_name");
    const degree = document.querySelectorAll("#degree");
    // BUG textarea not have attribute value
    const descriptionSchool = document.querySelectorAll("#description_school");
    const startDate = document.querySelectorAll("#start_date_school");
    const endDate = document.querySelectorAll("#end_date_school");
    for (let i = 0; i < schoolName.length; i++) {
        schoolName[i].setAttribute("value", schoolName[i].value);
        degree[i].setAttribute("value", degree[i].value);
        descriptionSchool[i].setAttribute("value", descriptionSchool[i].value);
        startDate[i].setAttribute("value", startDate[i].value);
        endDate[i].setAttribute("value", endDate[i].value);
    }
    counter++;
    const title =
        '<div id="accordion1">\
        <button type="button" class="accordion" onclick="change()">\
            Section ' +
        counter +
        '\
        </button>\
        <div class="panel">\
            <div class="form-group">\
                <label for="school_name">School</label>\
                <input\
                    type="text"\
                    name="school_name"\
                    id="school_name"\
                    placeholder=""\
                    required\
                />\
                <i class="fas fa-check-circle"></i>\
                <i class="fas fa-exclamation-circle"></i>\
                <small>Error message</small>\
            </div>\
            <div class="form-group">\
                <label for="degree">Degree</label>\
                <input\
                    type="text"\
                    name="degree"\
                    id="degree"\
                    placeholder=""\
                    required\
                />\
                <i class="fas fa-check-circle"></i>\
                <i class="fas fa-exclamation-circle"></i>\
                <small>Error message</small>\
            </div>\
            <div class="form-group">\
                <label for="description_school">Description</label>\
                <input\
                    type="text"\
                    id="description_school"\
                    name="description_school"\
                    placeholder="e.g Graduated with High Honors"\
                />\
                <i class="fas fa-check-circle"></i>\
                <i class="fas fa-exclamation-circle"></i>\
                <small>Error message</small>\
            </div>\
            <div class="form-group">\
                <label>Start & End Date*</label>\
                <div class="date">\
                    <input\
                        type="month"\
                        name="start_school"\
                        id="start_date_school"\
                        required\
                    />\
                    <input\
                        type="month"\
                        name="end_school"\
                        id="end_date_school"\
                        required\
                    />\
                    <small>Error message</small>\
                </div>\
            </div>\
        </div>\
    </div>';
    const moreForm1 = document.querySelector("#more-form1");
    moreForm1.innerHTML += title;
    // const accordion1 = document.querySelectorAll("#accordion1");
    // for (let i = 0; i < accordion1.length; i++) {
    //     const closeForm = accordion1[i].getElementsByClassName("button-1");
    // }
    const closeForm1 = document.getElementsByClassName("accordion");

    for (let i = 0; i < closeForm1.length; i++) {
        closeForm1[i].classList.remove("change");
        let panel = closeForm1[i].nextElementSibling;
        panel.style.maxHeight = null;
    }
});
