document.addEventListener("DOMContentLoaded", () => {
  const phoneIcon = document.getElementById("phoneIcon");
  const emailIcon = document.getElementById("emailIcon");

  const phonePopup = document.getElementById("phonePopup");
  const emailPopup = document.getElementById("emailPopup");

  const closePhoneBtn = document.getElementById("closePhoneBtn");
  const closeEmailBtn = document.getElementById("closeEmailBtn");

  const copyPhoneBtn = document.getElementById("copyPhoneBtn");
  const copyEmailBtn = document.getElementById("copyEmailBtn");

  const phoneNumberElement = phonePopup.querySelector(".popup-content p");
  const emailElement = emailPopup.querySelector(".popup-content p");

  if (phoneNumberElement && emailElement) {
    const phoneNumber = phoneNumberElement.textContent
      .replace("전화번호: ", "")
      .trim();
    const email = emailElement.textContent.replace("이메일: ", "").trim();

    phoneIcon.addEventListener("click", () => {
      phonePopup.classList.remove("hidden");
    });

    emailIcon.addEventListener("click", () => {
      emailPopup.classList.remove("hidden");
    });

    closePhoneBtn.addEventListener("click", () => {
      phonePopup.classList.add("hidden");
    });

    closeEmailBtn.addEventListener("click", () => {
      emailPopup.classList.add("hidden");
    });

    copyPhoneBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert("전화번호가 클립보드에 복사되었습니다!");
        })
        .catch((err) => {
          console.error("복사 오류:", err);
        });
    });

    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          alert("이메일이 클립보드에 복사되었습니다!");
        })
        .catch((err) => {
          console.error("복사 오류:", err);
        });
    });

    // 팝업 밖을 클릭하면 팝업이 닫히게 하려면 아래 코드를 추가합니다.
    window.addEventListener("click", (event) => {
      if (event.target === phonePopup) {
        phonePopup.classList.add("hidden");
      }
      if (event.target === emailPopup) {
        emailPopup.classList.add("hidden");
      }
    });
  } else {
    console.error("전화번호 또는 이메일 요소를 찾을 수 없습니다.");
  }
});
