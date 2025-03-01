import { initNavbar } from "./components/navbar.js";
import { initHomeSection } from "./components/homeSection.js";
import { initAboutSection } from "./components/aboutSection.js";
import { initSkillsSection } from "./components/skillsSection.js";
import { initProjectsSection } from "./components/projectsSection.js";
import { initContactSection } from "./components/contactSection.js";
import { initFooter } from "./components/footer.js";


// Update the --vh variable on resize for iOS
function fixViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Call the function on page load and resize
window.addEventListener('load', fixViewportHeight);
window.addEventListener('resize', fixViewportHeight);


$(document).ready(function() {
  const components = [
    { selector: '#homeSection', path: './src/components/homeSection.html', init: initHomeSection },
    { selector: '#navbar', path: './src/components/navbar.html', init: initNavbar },
    { selector: '#aboutSection', path: './src/components/aboutSection.html', init: initAboutSection },
    { selector: '#skillsSection', path: './src/components/skillsSection.html', init: initSkillsSection },
    { selector: '#projectsSection', path: './src/components/projectsSection.html', init: initProjectsSection },
    { selector: '#contactSection', path: './src/components/contactSection.html', init: initContactSection },
    { selector: '#footer', path: './src/components/footer.html', init: initFooter }
  ];


    var $scrollButton = $('#scrollToTop');
    $scrollButton.fadeOut(0);
    
    $(window).on('scroll', function () {
      
      var distanceScrolled = ($(window).scrollTop() - $(window).height());
      var pageScrollHeight = ($(document).height() - 2*$("#aboutSection").height());

      var scrollPercentage = distanceScrolled/pageScrollHeight;
      var angle = scrollPercentage*360;

      $scrollButton.css("--angle", angle+"deg");


        if ($(window).scrollTop() > $(window).height()) {
            $scrollButton.fadeIn(300);
        } else {
            $scrollButton.fadeOut(300);
        }
    });

    $scrollButton .click((e) => {
      $('#homeNavButton').mousedown();
    });
  


  $scrollButton.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
  });

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


        document.addEventListener("scroll", () => {
          document.documentElement.style.setProperty("--scroll", window.scrollY);
      });
      



          $("#brand").removeClass("opacity-0");
          $("#brand").addClass('fadeInFast opacity-100');
          
          $("#homeSectionText").removeClass("translate-y-[50vh]");
          $("#homeSectionText").addClass('fadeIn translate-y-0');


        // Making the navbar buttons fade in from above sequentially
        $('#navButtons .navButton').each(function(index) {
          var button = $(this);
          
          // Delaying the animation for each button's fade in from above
          setTimeout(function() {
            button.removeClass('translate-y-[-10vh]');
            button.addClass('fadeIn translate-y-0');
          }, 60 * (index+5));
        });

      }
    });
  });

});
