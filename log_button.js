function addLogButton() {
  if (document.querySelector(".log-btn")) return;

  const navContainer = document.querySelector(
    ".navbar-buttons.flex-row.ml-auto.order-xl-2.navbar-nav"
  );
  if (!navContainer) return;

  const container = document.createElement("div");
  container.className = "mr-2";
  container.innerHTML = `
    <button
      type="button"
      class="btn btn-secondary log-btn"
      style="display:inline-block !important; visibility:visible !important;"
    >
      Logs
    </button>
  `;

  container.querySelector("button").addEventListener("click", () => {
    window.location.assign("/settings?tab=logs");
  });

  // Insert LEFT of Random if Random exists, else append
  const randomBtn = navContainer.querySelector(".random-btn");
  if (randomBtn) {
    const randomWrapper = randomBtn.closest("div") || randomBtn.parentElement;
    navContainer.insertBefore(container, randomWrapper);
  } else {
    navContainer.appendChild(container);
  }
}