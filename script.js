var menu = document.getElementById('hamburgerIcon');
// grab menu
var mobileMenu = document.getElementById('mobileMenu');
var body = document.body;

function toggleMenu() {
  menu.classList.toggle('hamburger-icon__close-x');
  mobileMenu.classList.toggle('mobile-menu--isActive');
  body.classList.toggle('lock-scroll');
}


//if answer is no then hide the input
//else display the input

function displayQuestion(answer) {
  //legal-convict-No
  if(answer === 'No') {
    document.getElementById('convictReason').style.display = "none";
  } else if (answer === 'Yes') {
    document.getElementById('convictReason').style.display = "block";
  }
}

//function to add a div containing the form under the existing one
function addInstitution() {
  // hide button
  var addBtn = document.querySelector('.institutionBtn');
  addBtn.style.display = "none";

  // create div
  var divToAppend = document.createElement('div');

  // select parent div
  var educationDiv = document.querySelector('#education');

  //add class
  divToAppend.setAttribute('class',"school-2");
  divToAppend.innerHTML = ("<div>\n    <label for=\"edu-SchType\">Type of school</label>\n    <select name=\"Type of 2nd school\" id=\"edu-SchType\">\n      <option value=\"High School\">High School</option>\n      <option value=\"College\">College</option>\n      <option value=\"Other Education or special training\">Other Education or special training</option>\n    </select>\n  </div>\n  <div>\n    <label for=\"edu-name\">Name of Institution</label>\n    <input type=\"text\" name=\"Name of 2nd Institution\" maxlength=\"100\" id=\"edu-name\">\n  </div>\n  <div>\n    <label for=\"edu-location\">Location</label>\n    <input type=\"text\" name=\"2nd Institution's Location\" maxlength=\"100\" id=\"edu-location\">\n  </div>\n  <div>\n    <label for=\"edu-major\">Major</label>\n    <input type=\"text\" name=\"Major\" maxlength=\"100\" id=\"edu-major\">\n  </div>\n  <div>\n    <label for=\"edu-degree\">Degree obtained</label>\n    <input type=\"text\" name=\"2nd Degree obtained\" maxlength=\"100\" id=\"edu-degree\">\n  </div>")

  educationDiv.appendChild(divToAppend);
}