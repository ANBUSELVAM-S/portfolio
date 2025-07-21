function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const mainContent = document.getElementById("mainContent");

    navLinks.classList.toggle("active");

    // If menu is open, hide main content
    if (navLinks.classList.contains("active")) {
      mainContent.classList.add("hidden");
    } else {
      mainContent.classList.remove("hidden");
    }
  }