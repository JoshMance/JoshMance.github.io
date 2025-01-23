import { initNavbar } from "./components/navbar.js";
import { initFooter } from "./components/footer.js";
import { initHomeSection } from "./components/homeSection.js";
import { initSkillsSection } from "./components/skillsSection.js";
import { initProjectsSection } from "./components/projectsSection.js";
import { initContactSection } from "./components/contactSection.js";

const components = [
  { selector: '#navbar', path: './src/components/navbar.html', init: initNavbar },
  { selector: '#homeSection', path: './src/components/homeSection.html', init: initHomeSection },
  { selector: '#skillsSection', path: './src/components/skillsSection.html', init: initSkillsSection },
  { selector: '#projectsSection', path: './src/components/projectsSection.html', init: initProjectsSection },
  { selector: '#contactSection', path: './src/components/contactSection.html', init: initContactSection },
  { selector: '#footer', path: './src/components/footer.html', init: initFooter }
];

$(document).ready(function() {
  components.forEach(component => {
    $(component.selector).load(component.path, function () {
      component.init();
    });
  });
});