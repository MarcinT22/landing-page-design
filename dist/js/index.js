"use strict";
var mainImage = document.getElementById("mainImage");
var thumbnails = document.querySelectorAll(".gallery__thumb");
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function (event) {
        event.preventDefault();
        if (mainImage && event.target instanceof HTMLImageElement) {
            mainImage.src = event.target.src;
        }
    });
});
var form = document.getElementById("contactForm");
var formSubmit = form === null || form === void 0 ? void 0 : form.querySelector(".form__button");
var formLoader = form === null || form === void 0 ? void 0 : form.querySelector(".form__loader");
function clearForm(form) {
    var inputs = form.querySelectorAll("input");
    inputs.forEach(function (input) {
        input.value = "";
    });
}
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (formSubmit) {
            formSubmit.classList.add("form__button--hidden");
        }
        if (formLoader) {
            formLoader.classList.add("form__loader--visible");
        }
        setTimeout(function () {
            if (formSubmit) {
                formSubmit.classList.remove("form__button--hidden");
            }
            if (formLoader) {
                formLoader.classList.remove("form__loader--visible");
            }
            clearForm(form);
            alert("Message was sent.");
        }, 1000);
    });
}
