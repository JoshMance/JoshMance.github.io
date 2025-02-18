export function initNavbar () {

    // The logical location and width of the navbar highlight
    // Used to set goal values when animating changes to the highlight
    var targetHighlightLeft =  0;
    var targetHighlightWidth =  0;
    var highlightIsMoving =  false;
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
                    scrollTop: $target.offset().top
                }, 500); // Duration of animation in milliseconds
            } else {
                console.warn(`Target section with ID "${targetId}" not found.`);
            }
        } else {
            console.warn('No target ID specified for this nav button.');
        }
    }

    // Splits text into individual characters for each element in the set
    function splitTextIntoChars($divs) {
        $divs.each(function () {
            const text = this.textContent;
            $(this).empty();
            text.split('').forEach(char => {
                const $newDiv = $('<div>')
                    .html(char === ' ' ? '&nbsp;' : char)
                    .css('display', 'inline-block')
                    .css('z-index', 5)
                    .css('align-self', 'center')
                    .css('width', 'min-content')
                    .addClass("navTextChar");
                $(this).append($newDiv);
            });
        });
    }

    splitTextIntoChars($('.navButtonText'));

    
    // Creating the highlight element
    const $RefButton = $('#homeNavButton');
    const $RefButtonInner = $RefButton.children().first();
    const $RefButtonInnerText = $RefButton.children().first().children().first();

    const $highlight = $('<div></div>').css({
        position: 'absolute',
        left: $RefButtonInner.children().first().offset().left,
        top: $RefButtonInnerText.offset().top - 3,
        height: $RefButtonInnerText.innerHeight(),
        width:  $RefButton.width(),
        "border-bottom": "0.15rem solid #f7e018",
        zIndex: 1
    });

    $('#navbar').append($highlight);


    function moveHighlight() {

        if (highlightIsMoving) {
            return;
        }
        else {
            highlightIsMoving = true;

            let currentLeft = $highlight.offset().left;
            let currentWidth = $highlight.innerWidth();
        
            let leftDifference = targetHighlightLeft - currentLeft;
            let widthDifference = targetHighlightWidth - currentWidth;
        
            // Stop condition: When the highlight is close enough to the target
            if (Math.abs(leftDifference) > 1 || Math.abs(widthDifference) > 1) {
                // Gradually adjust position and size
                let newLeft = currentLeft + leftDifference * 0.25; // Move 10% of the distance
                let newWidth = currentWidth + widthDifference * 0.25; // Resize 10% of the difference
        
                $highlight.css("left", newLeft);
                $highlight.css("width", newWidth);
        
                // Request the next frame for animation
                requestAnimationFrame(moveHighlight);
            } else {
                // Snap to the exact target to avoid any rounding issues
                $highlight.css("left", targetHighlightLeft);
                $highlight.css("width", targetHighlightWidth);
            }
            highlightIsMoving = false;
        }
    }


    // Creating a scroll observer to determine the current section and toggle the navbar style
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.slice().forEach(entry => {

            if (entry.isIntersecting) {

                $(entry.target)
            
                // Finding the nav button that targets this section
                var $navButton = $(`div[target="${entry.target.id}"]`);
                if (!pageIsScrolling) {
                    targetHighlightLeft = Math.ceil($navButton.children().first().offset().left);
                    targetHighlightWidth = Math.ceil($navButton.width());
                    moveHighlight();
                }
            }
        });
    }, {
        threshold: 0.3,
    });
    const $sections = Array.from($('.section')); // Get an array of sections
    // Observe each section for scroll events
    $sections.forEach(entry => scrollObserver.observe(entry));

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
        $('#hamburgerButton').mousedown();
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
        $('#hamburger-menu').toggleClass('hidden');
        $('#hamburgerButton').toggleClass("open");
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