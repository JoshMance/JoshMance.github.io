import { initNavbar } from "./components/navbar.js";
import { initFooter } from "./components/footer.js";
import { initHomeSection } from "./components/homeSection.js";
import { initSkillsSection } from "./components/skillsSection.js";
import { initProjectsSection } from "./components/projectsSection.js";
import { initExperienceSection } from "./components/experienceSection.js";
import { initContactSection } from "./components/contactSection.js";

$(document).ready(function() {
  const components = [
    { selector: '#homeSection', path: './src/components/homeSection.html', init: initHomeSection },
    { selector: '#navbar', path: './src/components/navbar.html', init: initNavbar },
    { selector: '#skillsSection', path: './src/components/skillsSection.html', init: initSkillsSection },
    { selector: '#projectsSection', path: './src/components/projectsSection.html', init: initProjectsSection },
    { selector: '#experienceSection', path: './src/components/experienceSection.html', init: initExperienceSection },
    { selector: '#contactSection', path: './src/components/contactSection.html', init: initContactSection },
    { selector: '#footer', path: './src/components/footer.html', init: initFooter }
  ];

  // Keep track of how many components have loaded
  let componentsLoaded = 0;

  // Show loading screen
  $('#loadingScreen').show();

  components.forEach(component => {
    $(component.selector).load(component.path, function () {
      component.init();

      // Increment loaded components count
      componentsLoaded++;

      // Check if all components are loaded
      if (componentsLoaded === components.length) {
        // Hide loading screen
        $('#loadingScreen').fadeOut(500);

      }
    });
  });
});
