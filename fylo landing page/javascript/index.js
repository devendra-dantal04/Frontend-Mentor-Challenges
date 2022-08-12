const button = document.querySelector(".contact-btn");
const content = document.querySelector(".contact-btn-section");
const contact = document.querySelector(".contact-section");
const alertElem = document.querySelector(".alert");

button.addEventListener("click", function() {
    var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector(".contact-detail").value)) {
        alert("Thank you for your message!");
        alertElem.style.display = "none";
    }else {
        alertElem.style.display = "block";
    }
})