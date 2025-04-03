/*!
  * ©️ 2025 Projekt City Ltd. | All rights reserved
  * 
  * This code is the property of Projekt City Ltd. and may not be copied or redistributed without permission
  * Legal basis: This code is intended for use solely on the sites of Projekt City
  * Redistribution or use on other sites, not related to Projekt City, is strictly prohibited
  * For more information, please contact us at: projektcityofficial@gmail.com
  * 
  * Script version: 1.0
*/

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