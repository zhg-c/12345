const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "�����������ť���� ??";
  setTimeout(() => {
    btn.textContent = "�������";
  }, 1000);
});
