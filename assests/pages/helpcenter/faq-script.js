function toggleContent(id, triangleId) {
    var content = document.getElementById(id);
    var triangle = document.getElementById(triangleId);
    if (content.style.display === "none") {
      content.style.display = "block";
      triangle.classList.add('rotated');
    } else {
      content.style.display = "none";
      triangle.classList.remove('rotated');
    }
}