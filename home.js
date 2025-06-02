function toggleMenu() {
      const nav = document.getElementById("nav-links");
      nav.classList.toggle("active");
    }

function goToDetail(id) {
  
  window.location.href = `detail.html?id=${id}`;
}
