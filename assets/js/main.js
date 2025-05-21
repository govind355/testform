const API_URL = "https://script.google.com/macros/s/AKfycbxB-QsDcBai4Q883FwBI2aKMVP8hp9XEktQyyoyEx8QvB8mTb6cn5oG9At5Jet4eewyLQ/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    document.getElementById("leadCount").textContent = data.length;
  })
  .catch(() => {
    document.getElementById("leadCount").textContent = "Error loading";
  });
