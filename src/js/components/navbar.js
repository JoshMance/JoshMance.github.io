export function initNavbar () {

    // Holds the distance from the top. 
     // Used by the scoll handler to access the previous state.
     var scroll_distance = 0;

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
    $( document ).on('click', '#home', function() {
        scroll({top: 0, left: 0, behavior: "smooth"});
    });
    $( document ).on('click', '#home-button', function() {
        scroll({top: 0, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#about', function() {
        var distance = $('#about-section').position().top - 0.5*$('nav').height() 
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#projects', function() {
        var distance = $('#projects-section').position().top - 0.5*$('nav').height() 
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#contact', function() {
        var distance = $('#contact-section').position().top - 0.5*$('nav').height() 
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    // Scrolling to the top of the page if home button clicked
    $( document ).on('click', '.home-button', function() {
        scroll({top: 0, left: 0, behavior: "smooth"});
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