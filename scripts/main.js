const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "你点击了这个按钮！！ ??";
  setTimeout(() => {
    btn.textContent = "点击这里";
  }, 1000);
});
