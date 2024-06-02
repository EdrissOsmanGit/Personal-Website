function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
  } else {
      dropdown.classList.add("show");
  }
}