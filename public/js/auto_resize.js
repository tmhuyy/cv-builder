const textareas = document.querySelectorAll("textarea");
for (let textarea of textareas) {
    textarea.addEventListener("keyup", (e) => {
        textarea.style.height = "63px";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    });
}
