// leads.js
document.addEventListener("DOMContentLoaded", () => {
  const leadList = document.getElementById("leadList");
  const leads = JSON.parse(localStorage.getItem("leads")) || [];

  if (leads.length === 0) {
    leadList.innerHTML = "<li>No leads found.</li>";
    return;
  }

  leads.forEach((lead, index) => {
    const li = document.createElement("li");
    li.textContent = `${lead.name} - ${lead.email} (${lead.status})`;
    leadList.appendChild(li);
  });
});
