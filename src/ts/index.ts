const mainImage = document.getElementById(
  "mainImage"
) as HTMLImageElement | null;
const thumbnails = document.querySelectorAll(
  ".gallery__thumb"
) as NodeListOf<HTMLImageElement>;

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    event.preventDefault();
    if (mainImage && event.target instanceof HTMLImageElement) {
      mainImage.src = event.target.src;
    }
  });
});

const form = document.getElementById("contactForm") as HTMLFormElement | null;
const formSubmit = form?.querySelector(
  ".form__button"
) as HTMLButtonElement | null;
const formLoader = form?.querySelector(".form__loader") as HTMLElement | null;

function clearForm(form: HTMLFormElement) {
  const inputs = form.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
  inputs.forEach((input) => {
    input.value = "";
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formSubmit) {
      formSubmit.classList.add("form__button--hidden");
    }
    if (formLoader) {
      formLoader.classList.add("form__loader--visible");
    }

    setTimeout(() => {
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
