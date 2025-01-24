export function initNavbar () {

   $('#navbar').addClass('sticky top-0 z-10 bg-white');



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

    const $highlight = $('<div></div>').css({
        position: 'absolute',
        left: $RefButton.offset().left,
        top: $RefButton.offset().top + 30,
        height: "1.5px",
        width: $RefButton.outerWidth(),
        background: '#ffffff',
        zIndex: 1
    });

    $('#navButtons').append($highlight);



    // Handle click on skills buttons
    $('.navButton').mousedown(function () {


        const currentLeft = $highlight.offset().left;
        const finalLeft = $(this).offset().left;
        const distance = finalLeft - currentLeft;
        const finalWidth = $(this).innerWidth();

        // Animate the background element to move with the button
        $highlight.animate({
            left: `+=${distance}px`,
            width: `${finalWidth}`
        }, 400);
    });

    // Simulate a click to initialize the state
    $('#homeNavButton').mousedown();

    // Creating a scroll observer to determine the current section and toggle the navbar style
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Finding the nav button that targets this section
                var $navButton = $(`div[target="${entry.target.id}"]`);

                if (entry.target.id === "homeSection") {
                    $('#navbar').removeClass("scrolled");
                    $highlight.css("background", "#ffffff");
                }
                else {
                    $('#navbar').addClass("scrolled");
                    $highlight.css("background", "#000000");
                }

                $navButton.mousedown();
            }
        });
    }, {
        threshold: 0.5, // Triggers when 50% of the section is visible
    });
    
    const $sections = Array.from($('.section'));
    $sections.forEach(entry => observer.observe(entry));




   
    function close_hamburger_menu() {
        $('#hamburger-menu').toggleClass('hidden');
        $('#hamburger-menu').toggleClass('flex');

        $('#hamburger-menu-button').children("*").toggleClass("bi bi-list");
        $('#hamburger-menu-button').children("*").toggleClass("bi bi-x-lg");
    } 

    // Hamburger menu toggle 
    $(document).on('click', '#hamburger-menu-button', function() {
        close_hamburger_menu();
    });

    // Dark mode toggle 
    $(document).on('click', '#dark-mode-toggle', function() {
        $('*').toggleClass("dark");
        $('#dark-mode-toggle').children("*").toggleClass("bi-brightness-high-fill");
        $('#dark-mode-toggle').children("*").toggleClass("bi-moon-stars-fill");
    });

    $(document).on('click', '#dark-mode-toggle-hamburger', function() {
        $('*').toggleClass("dark");
        $('#dark-mode-toggle-hamburger').children("*").toggleClass("bi-brightness-high-fill");
        $('#dark-mode-toggle-hamburger').children("*").toggleClass("bi-moon-stars-fill");
    });

    // Navbar scroll handlers 
    

    $( document ).on('click', '#homeNavButton', function() {
        scroll({top: 0, left: 0, behavior: "smooth"});
    });
    $( document ).on('click', '#returnNavButton', function() {
        scroll({top: 0, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#skillsNavButton', function() {
        let $title = $('#skills-section-title');
        let distance = $title.position().top - $title.height();
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#projectsNavButton', function() {
        let $title = $('#projects-section-title');
        let distance = $title.position().top - $title.height();
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#contactNavButton', function() {
        let $title = $('#contact-section-title');
        let distance = $title.position().top - $title.height();
        scroll({top: distance, left: 0, behavior: "smooth"});
    });


    // Hamburger menu scroll handlers 
    $( document ).on('click', '#about-hamburger', function() {
        var distance = $('#about-section').position().top - 4*$('nav').height() 
        scroll({top: distance, left: 0, behavior: "smooth"});

        close_hamburger_menu();
    });

    $( document ).on('click', '#projects-hamburger', function() {
        var distance = $('#projects-section').position().top - 4*$('nav').height() 
        scroll({top: distance, left: 0, behavior: "smooth"});
        
        close_hamburger_menu();
    });

    $( document ).on('click', '#contact-hamburger', function() {
        var distance = $('#contact-section').position().top - 4*$('nav').height()  
        scroll({top: distance, left: 0, behavior: "smooth"});

        close_hamburger_menu();
    });
};