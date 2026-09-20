document.addEventListener("DOMContentLoaded", () => {
  const fab = document.getElementById("chatFab");
  const chat = document.getElementById("chatWindow");
  const close = document.getElementById("chatClose");
  if (fab && chat) fab.addEventListener("click", () => chat.classList.toggle("show"));
  if (close && chat) close.addEventListener("click", () => chat.classList.remove("show"));

  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      document.querySelectorAll(".faq-item").forEach(other => {
        if (other !== item) other.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });

  const clear = document.querySelector(".clear-btn");
  if (clear) {
    clear.addEventListener("click", () => {
      document.querySelectorAll("input").forEach(i => i.value = "");
      document.querySelectorAll("select").forEach(s => s.selectedIndex = 0);
    });
  }

  // UI-only demo: gently scroll to the result area. Replace this handler with your Python/API call.
  const predict = document.getElementById("predictBtn");
  if (predict) {
    predict.addEventListener("click", () => {
      const result = document.getElementById("resultSection");
      if (result) result.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  document.querySelectorAll(".quick-chips button").forEach(chip => {
    chip.addEventListener("click", () => {
      const body = chip.closest(".chat-body");
      const reply = document.createElement("div");
      reply.className = "bot-msg";
      reply.style.marginTop = "8px";
      reply.textContent = chip.textContent.includes("category")
        ? "The prediction page uses six rainfall ranges, from No Rainfall to Very High Rainfall."
        : "The model uses weather and previous-rainfall patterns to estimate future precipitation.";
      body.appendChild(reply);
    });
  });
});