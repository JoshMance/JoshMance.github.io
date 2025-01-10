export function initNavbar () {

   $('#navbar').addClass('sticky top-0 z-50 top-0 z-50 sticky dark:shadow-none px-2 py-2 font-normal text-white lg:text-md xl:text-lg align-center navbar');



   const $button = $('#homeNavButton');
   const fontSize = parseFloat($button.css('fontSize'));

   var $underline = $("<div></div>");
   $underline.css("position", "absolute");
   $underline.css("left", $button.offset().left - $button.width());
   $underline.css("top", $button.offset().top + $button.height() + 2*fontSize);
   $underline.css("height", '2px');
   $underline.css("width", $button.innerWidth()/2);
   $underline.css("background", "#f3dc0e");
   $underline.css("z-index", 1);

   $('#navButtons').append($underline);

   $('.navButton').mousedown(function() {
    $underline.stop(true).animate({
        left: `${$(this).offset().left + 0.5*$(this).width()}px`,
    }, 300);
});




   
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
        var distance = $('#skillsSection').position().top
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#projectsNavButton', function() {
        var distance = $('#projectsSection').position().top
        scroll({top: distance, left: 0, behavior: "smooth"});
    });

    $( document ).on('click', '#contactNavButton', function() {
        var distance = $('#contactSection').position().top
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


    $('#homeNavButton').mousedown();
};