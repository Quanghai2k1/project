const userAction = document.querySelector(".user-action");
const accountSettings = document.querySelector(".account-info-container");


userAction.addEventListener("click", (event) => {
  if (event.target.closest("button")) {
    let isInvalidInput = false;
    let alertMessage = "";
    const inputs = accountSettings.querySelectorAll("input");
    const textarea = accountSettings.querySelector("textarea");

    if (event.target.dataset.type === "save") {
      inputs.forEach((input) => {
        if (input.value === "") {
          isInvalidInput = true;
          return;
        }
      });

      alertMessage =
        isInvalidInput === true
          ? "Bạn chưa nhập đầy đủ! ❗❗"
          : "Lưu tài khoản! ✌🏻";
      alert(alertMessage);
    } else {
      inputs.forEach((input) => {
        input.value = "";
      });
      textarea.value = "";
    }
  }
});
