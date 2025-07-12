const toggleBtn = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

toggleBtn.addEventListener("click", function(e) {
  e.preventDefault();
  sidebar.classList.add("active");
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
