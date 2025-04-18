document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModal");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          modal.style.display = "flex";
        } else {
          alert("❌ Message marked as spam or failed. Please contact support.");
        }
      })
      .catch((error) => {
        alert("❌ Network error. Try again later.");
        console.error(error);
      });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
