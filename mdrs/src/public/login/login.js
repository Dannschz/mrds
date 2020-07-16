window.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPassword").value = "";

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const IEData = new FormData(e.target);

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: IEData,
    });
    const res = await response.json();
    console.log(res);
    if (res.message == "loged restaurant") {
      localStorage.setItem("userName", res.userName);
      localStorage.setItem("email", res.email);
      window.location = "http://localhost:3000/rest";
    } else if (res.message == "loged ie") {
      localStorage.setItem("userName", res.userName);
      localStorage.setItem("email", res.email);
      window.location = "http://localhost:3000/ie";
    }
    /* try {
      sessionStorage.setItem("token", token);
      fetch("http://localhost:3000/ie", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    } */
  });
});
