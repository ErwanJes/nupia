const form = document.getElementById("signup-form");
const errorText = document.getElementById("signup-form-error");
const successText = document.getElementById("signup-form-success");

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/2ec143c4-ccbf-423f-9f8f-a38d06c60801", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response = function() {
      errorText.classList.add('hidden');
      successText.classList.remove('hidden');
      console.log(response);
    })
    .catch(error = function() {
      errorText.classList.remove('hidden');
      successText.classList.add('hidden');
      console.log(error);
    });
}

