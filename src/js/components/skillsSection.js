export function initSkillsSection() {
    

    function makeDraggable($div) {
        let isDragging = false;
        let offsetX = 0;

        $div.on('mousedown', function(event) {
            isDragging = true;
            offsetX = event.pageX - $div.offset().left;
            $div.css('cursor', 'grabbing'); // Change cursor when dragging
        });

        $(document).on('mousemove', function(event) {
            if (isDragging) {
                const newLeft = event.pageX - offsetX;
                $div.css('left', newLeft + 'px');
            }
        });

        $(document).on('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                $div.css('cursor', 'pointer'); // Reset cursor when dragging is done
            }
        });
    }


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
    $temp.css("margin", "2vh");
    $temp.css("z-index", 1);

    makeDraggable($temp);

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


    $('.skills-btn').mousedown(function() {
        let currentLeft = $temp.offset().left;
        let finalLeft = $(this).offset().left;
        let distance = finalLeft - currentLeft;

        let finalWidth = $(this).outerWidth();
        $temp.animate({
            left: `+=${distance}px`,
            width: `${finalWidth}`
        }, 400); 

    });

    console.log("Here!");
    $('#skills-button-1').mousedown();

}