// main.js
document.addEventListener("DOMContentLoaded", () => {
  const leads = JSON.parse(localStorage.getItem("leads")) || [];
  document.getElementById("leadCount").textContent = leads.length;
});
