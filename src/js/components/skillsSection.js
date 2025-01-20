export function initSkillsSection() {

    const $carousel = $('.icon-carousel');
    const iconWidth = $carousel.children().first().outerWidth();
    const screenWidth = $carousel.width();
    
    const numIcons = $carousel.children().length;
    const whitespace = screenWidth - (iconWidth*numIcons);
    const gapSize = whitespace/numIcons;

    $carousel.children().each(function(index, icon) {
        var $icon = $(icon);
        $icon.css("left", index*(iconWidth + gapSize));
    });

    
    // Takes all divs supplied by the argument and splits their text
    // into a single div per character (without affecting the UI).
    // Used to allow individual letters to have their properties change
    // e.g. when a dynamic tab moves across a button, the letters are able to
    // change colour individually
    function splitTextIntoChars($divs) {
        $divs.each(function() {
            let text = this.textContent; // Preserves whitespaces
            $(this).empty(); 
            for (let char of text) {
                let $newDiv = $('<div>')
                    .html(char === ' ' ? '&nbsp;' : char) // Replacing spaces with &nbsp;
                    .css('display', 'inline-block');
                $(this).append($newDiv);
            }
        });
    }

    splitTextIntoChars($('.skills-btn'));

    const $button = $('#skills-button-1');
    
    var $temp = $("<div></div>");
    $temp.css("position", "absolute");
    $temp.css("left", $button.offset().left);
    $temp.css("height", $button.innerHeight());
    $temp.css("width", $button.innerWidth());
    $temp.css("background", "#143272");
    $temp.css("border-radius", "7px");
    $temp.css("margin", "2vh");
    $temp.css("z-index", 1);

    $('#skills-buttons').append($temp);

    
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const buttonLeft = $temp.offset().left;
                const buttonRight = buttonLeft + $temp.outerWidth();
                $('.skills-btn').children().each(function() {
                    const charLeft = $(this).offset().left;
                    const charRight = charLeft + $(this).outerWidth();
                    if (buttonLeft <= charLeft && buttonRight >= charRight) {
                        $(this).css('color', 'white');
                    }
                    else {
                        $(this).css('color', 'black');
                    }
                });
            }  
        });
    });
    const config = {attributes: true, childList: false, subtree: false};
    observer.observe($temp[0], config);


    $('.skills-btn').mousedown(function(event) {
        
        // Moving the tab highlight background
        let currentLeft = $temp.offset().left;
        let finalLeft = $(this).offset().left;
        let distance = finalLeft - currentLeft;
        let finalWidth = $(this).innerWidth();
        $temp.animate({
            left: `+=${distance}px`,
            width: `${finalWidth}`
        }, 400); 


        // Switching the skills text
        $('.skills-text').each(function () {
            $(this).hide();
          });


        $(`#${$(this).attr("target")}`).show();
    });

    $('#skills-button-1').mousedown();











    var time = 0;

    function getSpeed(t) {
        let speed = 5*Math.exp(1-(t/100));
        return speed > 0.1 ? speed : 0;
    }

    // Moves all icons in the carousel rightward, wrapping around 
    // to the start when the right-most bound is reached.
    function stepCarousel() {
        time += 1;
        
        var newLeft = 0;
        $carousel.children().each(function(index, icon) {

            var $icon = $(icon);
            var iconLeft = $icon.offset().left; // Absolute position relative to the document
            newLeft = iconLeft + getSpeed(time);
                if (newLeft >= screenWidth) {
                    newLeft = 0;
                }
            
            // Move the icon to the right by 1px
            console.log("", newLeft,)
            $icon.css("left", newLeft);
        });

        requestAnimationFrame(stepCarousel); 
    }

    // requestAnimationFrame(stepCarousel);
    
    $(".icon-carousel").on("click", function () {
        time = 0;
        requestAnimationFrame(stepCarousel);
    });
    
    

}