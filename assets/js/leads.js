const API_URL = "https://script.google.com/macros/s/AKfycbxB-QsDcBai4Q883FwBI2aKMVP8hp9XEktQyyoyEx8QvB8mTb6cn5oG9At5Jet4eewyLQ/exec";

document.addEventListener("DOMContentLoaded", async () => {
  const leadList = document.getElementById("leadList");

  try {
    const res = await fetch(API_URL);
    const leads = await res.json();

    leadList.innerHTML = "";

    if (!leads || leads.length === 0) {
      leadList.innerHTML = "<li>No leads found.</li>";
      return;
    }

    leads.forEach(lead => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${lead.Name}</strong> (${lead.Email}) - ${lead.Status}<br/>
        Source: ${lead.Source} | Phone: ${lead.Phone}<br/>
        Notes: ${lead.Notes}<br/>
        <small>Added: ${lead.Timestamp}</small>
        <hr/>
      `;
      leadList.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading leads:", error);
    leadList.innerHTML = "<li>Error loading leads.</li>";
  }
});
