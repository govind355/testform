// add-lead.js
document.getElementById("leadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const newLead = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    source: document.getElementById("source").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value,
  };

  const leads = JSON.parse(localStorage.getItem("leads")) || [];
  leads.push(newLead);
  localStorage.setItem("leads", JSON.stringify(leads));
  alert("Lead saved!");
  document.getElementById("leadForm").reset();
});
