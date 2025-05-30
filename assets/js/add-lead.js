const API_URL = "https://script.google.com/macros/s/AKfycbxB-QsDcBai4Q883FwBI2aKMVP8hp9XEktQyyoyEx8QvB8mTb6cn5oG9At5Jet4eewyLQ/exec";

document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const lead = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    source: document.getElementById("source").value,
    status: document.getElementById("status").value,
    notes: document.getElementById("notes").value,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(lead),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (result.result === "success") {
      alert("Lead submitted successfully!");
      document.getElementById("leadForm").reset();
    } else {
      alert("Submission failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error submitting lead.");
  }
});
