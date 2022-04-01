const buttonField1 = document.querySelector("#next-1");
const buttonField2 = document.querySelector("#next-2");
const buttonField3 = document.querySelector("#next-3");
const buttonField4 = document.querySelector("#next-4");
const buttonField5 = document.querySelector("#next-5");
const buttonField6 = document.querySelector("#next-6");

// TODO check empty
// Personal details
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const address = document.querySelector("#address");
const phoneNumber = document.querySelector("#phone_number");
const email = document.querySelector("#email");
// Career Objective
const summary = document.querySelector("#summary");
// Education
const schoolName = document.querySelector("#school_name");
const degree = document.querySelector("#degree");
const descriptionSchool = document.querySelector("#description_school");
const startDate = document.querySelectorAll("#start_end_date_school")[0];
const endDate = document.querySelectorAll("#start_end_date_school")[1];
// Skill
const descriptionSkill = document.querySelector("#description_skill");
// Link
const link = document.querySelector("#link");
const label = document.querySelector("#label");

buttonField1.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator1();
});

buttonField2.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator2();
});

buttonField3.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator3();
});

buttonField4.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator4();
});
// BUG
buttonField6.addEventListener("click", (e) => {
    e.preventDefault();
    checkValidator6();
});

const blank = "Cannot be blank";

const checkValidator1 = function () {
    const firstNameValue = trimValue(firstName);
    const lastNameValue = trimValue(lastName);
    const addressValue = trimValue(address);
    const phoneNumberValue = trimValue(phoneNumber);
    const emailValue = trimValue(email);
    checkEmpty(firstNameValue, firstName, blank);
    checkEmpty(lastNameValue, lastName, blank);
    checkEmpty(addressValue, address, blank);
    checkEmpty(phoneNumberValue, phoneNumber, blank);
    checkEmail(emailValue, email, blank, "Invalid email");
};

const checkValidator2 = function () {
    const summaryValue = trimValue(summary);
    checkEmpty(summaryValue, summary, blank);
};

const checkValidator3 = function () {
    const schoolNameValue = trimValue(schoolName);
    const degreeValue = trimValue(degree);
    const descriptionSchoolValue = trimValue(descriptionSchool);
    const startDateValue = trimValue(startDate);
    const endDateValue = trimValue(endDate);
    checkEmpty(schoolNameValue, schoolName, blank);
    checkEmpty(degreeValue, degree, blank);
    checkEmpty(descriptionSchoolValue, descriptionSchool, blank);
    checkEmpty(startDateValue, startDate);
    checkEmpty(endDateValue, endDate, blank);
};

const checkValidator4 = function () {
    const descriptionSkillValue = trimValue(descriptionSkill);
    checkEmpty(descriptionSkillValue, descriptionSkill, blank);
};

const checkValidator6 = function () {
    const linkValue = trimValue(link);
    const labelValue = trimValue(label);
    checkEmpty(labelValue, label, blank);
    checkURL(linkValue, link, blank, "Invalid URL");
};

const checkEmpty = (value, inputValue, message) =>
    value === "" ? setError(inputValue, message) : setSuccess(inputValue);

const checkEmail = (value, inputValue, message1, message2) =>
    specialCondition(isEmail, value, inputValue, message1, message2);

const checkURL = (value, inputValue, message1, message2) =>
    specialCondition(isURL, value, inputValue, message1, message2);

const isEmail = function (email) {
    const condition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return condition.test(email);
};

const isURL = function (url) {
    const condition =
        /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return condition.test(url);
};

const setError = function (input, message) {
    const formGroup = input.parentElement; // .form-group
    const small = formGroup.querySelector("small");
    formGroup.className = "form-group error";
    small.innerText = message;
};

const setSuccess = function (input) {
    const formGroup = input.parentElement; // .form-group
    formGroup.className = "form-group success";
};

const trimValue = (e) => e.value.trim();

const specialCondition = function (
    type,
    value,
    inputValue,
    message1,
    message2
) {
    if (value === "") {
        setError(inputValue, message1);
    } else if (!type(value)) {
        setError(inputValue, message2);
    } else {
        setSuccess(inputValue);
    }
};
