export function initNavbar () {


    var pageIsScrolling = false;

   $('#navbar').addClass('sticky top-0 z-10 bg-white');


   // Ensuring thr logo completes its rotation animation even after 
   // the user has stopped hovering over it
   const $logo = $('#logo');

   $logo.on('mouseover', function () {
       // Add the animation class
       $logo.addClass('animating');
   
       // Optional: Remove the class after the animation ends
       $logo.one('animationend', function () {
           $logo.removeClass('animating');
       });
   });


   function scrollToTargetSection($navButton) { 
        // Get the target section ID from the `target` attribute of the nav button
        const targetId = $navButton.attr('target');  
        
        // Ensure the target ID exists
        if (targetId) {
            // Find the target element
            const $target = $(`#${targetId}`);
            
            // Ensure the target element exists on the page
            if ($target.length) {
                // Scroll to the target element smoothly
                $('html, body').animate({
                    scrollTop: $target.offset().top - (0.1 * $(window).height())
                }, 500); // Duration of animation in milliseconds
            } else {
                console.warn(`Target section with ID "${targetId}" not found.`);
            }
        } else {
            console.warn('No target ID specified for this nav button.');
        }
    }



    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find all divs with a matching section id as the section's target
                const sectionId = entry.target.id;
                
                // Use jQuery to select the divs with a matching data-target attribute
                const $matchingDivs = $(`li[target="${sectionId}"]`);
    
                $('.navButton').removeClass('active');
                $matchingDivs.each(function() {
                    $(this).addClass('active');
                });
            } else {
                // Optionally, remove .active when the section is no longer in view
                const sectionId = entry.target.id;
                
                // Use jQuery to select the divs with a matching data-target attribute
                const $matchingDivs = $(`div[data-target="${sectionId}"]`);
                
                $matchingDivs.each(function() {
                    $(this).removeClass('active');
                });
            }
        });
    }, {
        // Adjust the rootMargin to push the observer's root boundary into the viewport
        rootMargin: '-50% 0% -50% 0%', // This is a vertical margin of 50% in both top and bottom
        threshold: 0.0 // This means that any intersection of the target will trigger the observer
    });
    
    const $sections = $('.section'); // Get a jQuery object of all .section elements
    
    // Observe each section for scroll events
    $sections.each(function() {
        scrollObserver.observe(this);  // Observe the section
    });
    



    const scrollThreshold = window.innerHeight/4; 
    // Function to check the scroll position
    const checkScrollDistance = () => {
        const $navbar = $('#navbar');

        // Check if the user has scrolled past the threshold
        if ($(window).scrollTop() > scrollThreshold) {
            // Add the classes when scrolled beyond the threshold
            $navbar.addClass('scrolled shadow-low');
        } else {
            // Remove the classes when scrolled above the threshold
            $navbar.removeClass('scrolled shadow-low');
        }
    };

    // Add the scroll event listener using jQuery
    $(window).on('scroll', checkScrollDistance);



    $('.navButton').on('mousedown', function() {
        pageIsScrolling = true;
        scrollToTargetSection($(this));
        pageIsScrolling = false;
    });

    $('.homeHamburgerButton').on('mousedown', function() {
        pageIsScrolling = true;
        scrollToTargetSection($(this));
        pageIsScrolling = false;
    });
    

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()/2) {
            $('#hamburger-menu').removeClass("bg-white opacity-90 text-black")
            $('#hamburger-menu').addClass("bg-primary opacity-100 text-white")
        } else {
            $('#hamburger-menu').removeClass("bg-primary opacity-100 text-white")
            $('#hamburger-menu').addClass("bg-white opacity-90 text-black")
        }
    });


    // Hamburger menu toggle 
    $(document).on('mousedown', '#hamburgerButton', function() {
        $('#hamburgerButton').toggleClass('open');
        $('#hamburger-menu').toggleClass('opacity-0 opacity-100 translate-x-[2vw] translate-x-0');
    });

    // Dark mode toggle 
    $(document).on('click', '#dark-mode-toggle', function() {
        const $icon = $('#dark-mode-toggle').children("*");
        $icon.toggleClass("bi-brightness-high-fill bi-moon-stars-fill");
        $('*').toggleClass("dark");

    });

    $(document).on('click', '#dark-mode-toggle-hamburger', function() {
        $('*').toggleClass("dark");
        $('#dark-mode-toggle-hamburger').children("*").toggleClass("bi-brightness-high-fill");
        $('#dark-mode-toggle-hamburger').children("*").toggleClass("bi-moon-stars-fill");
    });


};