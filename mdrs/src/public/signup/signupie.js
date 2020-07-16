window.addEventListener("DOMContentLoaded", () => {
  const IEform = document.getElementById("IEform");
  document.getElementById("nameForm").value = "";
  document.getElementById("emailForm").value = "";
  document.getElementById("passwordForm").value = "";

  IEform.addEventListener("submit", (e) => {
    const IEData = new FormData(e.target);

    fetch("http://localhost:3000/signup-ie", {
      method: "POST",
      body: IEData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.message == "Usuario registrado") {
          window.location = "http://localhost:3000/login";
        }
      });
    e.preventDefault();
  });

  /* if (sessionStorage.getItem("token") != null) {
    console.log(sessionStorage.getItem("token"));
  } */
});
