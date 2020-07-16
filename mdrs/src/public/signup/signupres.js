window.addEventListener("DOMContentLoaded", () => {
  const restForm = document.getElementById("restForm");
  document.getElementById("nameRestForm").value = "";
  document.getElementById("propietaryForm").value = "";
  document.getElementById("emailForm").value = "";
  document.getElementById("passwordForm").value = "";

  restForm.addEventListener("submit", async (e) => {
    const restData = new FormData(e.target);

    fetch("http://localhost:3000/signup-res", {
      method: "POST",
      body: restData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.message == "Restaurante registrado") {
          window.location = "http://localhost:3000/login";
        }
      });
    e.preventDefault();
  });
});
