export function initNavbar () {

   $('#navbar').addClass('sticky top-0 z-10 py-1 font-normal lg:text-md xl:text-lg align-center navbar');

    var $button = $('#homeNavButton');
    var $buttonTextDiv = $button.children().first();
    var top = $buttonTextDiv.offset().top + $buttonTextDiv.height();

    var $underline = $("<div></div>");
    $underline.css("position", "absolute");
    $underline.css("top", top);
    $underline.css("height", '2px');
    $underline.css("background", "#f3dc0e");
    $underline.css("z-index", 20);

   $('#navButtons').append($underline);

   $('.navButton').mousedown(function() {
        // Moving the underline bar
        let width =  $(this).children().first().width();
        let whitespace = (($(this).innerWidth() - width)/2) +2;
        let left = $(this).offset().left + whitespace;
        $underline.stop(true).animate({
            left: `${left}px`,
            width: `${width}px`
        }, 300);
    });

    $('#homeNavButton').mousedown();

    // Creating a scroll observer to determine the current section and toggle the navbar style
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Finding the nav button that targets this section
                var $navButton = $(`div[target="${entry.target.id}"]`);

                if (entry.target.id === "homeSection") {
                    $('#navbar').removeClass("scrolled");
                }
                else {
                    $('#navbar').addClass("scrolled");
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