export function initSkillsSection() {

    const fadeFromLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-x-[-50px]');
                entry.target.classList.add('opacity-100', 'translate-x-0');
            }
        });
    });

    const fadeFromRightObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-x-[50px]');
                entry.target.classList.add('opacity-100', 'translate-x-0');
            }
        });

    });
    
    const options = {
        threshold: 1,
      };

    $(".fadeFromLeft").each(function() {
        fadeFromLeftObserver.observe(this, options);
    });

    $(".fadeFromRight").each(function() {
        fadeFromRightObserver.observe(this, options);
    });
    

//     let time = 0;

//     const $carousel = $('.icon-carousel');
//     const iconWidth = $carousel.children().first().outerWidth();
//     const iconHeight = $carousel.children().first().outerHeight();
//     const carouselWidth = $carousel.width();
//     const carouselLeft = $carousel.position().left;
//     const numIcons = $carousel.children().length;
//     const whitespace = carouselWidth - (iconWidth * numIcons);
//     const gapSize = whitespace / (numIcons);
//     const heightGrowthRate = 1;


//     // Initialize the carousel positions
//     function initCarousel() {
//         $carousel.children().each(function (index, icon) {
//             const $icon = $(icon);
//             $icon.css("left", (index) * (iconWidth + gapSize));
//         });
//     }

//     initCarousel();

//     // Splits text into individual characters for each element in the set
//     function splitTextIntoChars($divs) {
//         $divs.each(function () {
//             const text = this.textContent;
//             $(this).empty();
//             text.split('').forEach(char => {
//                 const $newDiv = $('<div>')
//                     .html(char === ' ' ? '&nbsp;' : char)
//                     .css('display', 'inline-block');
//                 $(this).append($newDiv);
//             });
//         });
//     }

//     splitTextIntoChars($('.skills-btn'));

//     // Create the temporary background element for the button highlight
//     const $button = $('#skills-button-1');
//     const $temp = $('<div></div>').css({
//         position: 'absolute',
//         left: $button.offset().left,
//         height: $button.innerHeight(),
//         width: $button.innerWidth(),
//         background: '#143272',
//         borderRadius: '7px',
//         margin: '2vh',
//         zIndex: 1
//     });

//     $('#skills-buttons').append($temp);

//     // Observe the background element to update text color on the button
//     const observer = new MutationObserver(function (mutations) {
//         mutations.forEach(function (mutation) {
//             if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
//                 const buttonLeft = $temp.offset().left;
//                 const buttonRight = buttonLeft + $temp.outerWidth();
//                 $('.skills-btn').children().each(function () {
//                     const charLeft = $(this).offset().left;
//                     const charRight = charLeft + $(this).outerWidth();
//                     $(this).css('color', buttonLeft <= charLeft && buttonRight >= charRight ? 'white' : 'black');
//                 });
//             }
//         });
//     });

//     const config = { attributes: true, childList: false, subtree: false };
//     observer.observe($temp[0], config);

//     // Handle click on skills buttons
//     $('.skills-btn').mousedown(function () {
//         initCarousel(); // Reinitialize carousel position on button click

//         const currentLeft = $temp.offset().left;
//         const finalLeft = $(this).offset().left;
//         const distance = finalLeft - currentLeft;
//         const finalWidth = $(this).innerWidth();

//         // Animate the background element to move with the button
//         $temp.animate({
//             left: `+=${distance}px`,
//             width: `${finalWidth}`
//         }, 400);

//         // Switch the visible skills text
//         $('.skills-text').hide();
//         $(`#${$(this).attr("target")}`).show();
//     });

//     // Simulate a click to initialize the state
//     $('#skills-button-1').mousedown();

//     // Calculate speed for the carousel animation
//     function getSpeed(t) {
//         let speed = 4 * Math.exp(1 - (t / 100));
//         return speed > 0.1 ? speed : 0;
//     }

//     // Carousel animation logic (move icons rightward and wrap around)
//     function stepCarousel() {
//         time += 1;

//         $carousel.children().each(function (index, icon) {
//             const $icon = $(icon);
//             const iconLeft = $icon.offset().left; // Absolute position relative to the document
//             let newLeft = iconLeft + getSpeed(time);
//             if (newLeft >= carouselWidth) {
//                 newLeft = 0; // Reset position when the icon exceeds the screen width
//             }

//             var height = $icon.outerHeight();


//             if ((newLeft < carouselLeft) || (newLeft > ((carouselWidth+carouselLeft)))) {
//                 $icon.css('opacity', 0);
//             }
//             else {
//                 $icon.css('opacity', 1);
//             }

//             if (newLeft < (carouselLeft)) {
//                 if (height < iconHeight) {
//                     $icon.css('height', height + heightGrowthRate);
//                 }
//             }
//             else if (newLeft > ((carouselWidth+carouselLeft) - 1.5*iconWidth)) {
//                 if (height > 0) {
//                     $icon.css('height', height - heightGrowthRate);
//                 }
//             }
//             // else {
//             //     // $icon.css('height', iconHeight);
//             // }

//             $icon.css("left", newLeft);
//         });

//         requestAnimationFrame(stepCarousel); // Keep the animation going
//     }

//     // Start carousel animation on click
//     $(".icon-carousel").on("click", function () {
//         time = 0; // Reset time on each click
//         requestAnimationFrame(stepCarousel);
//     });

//     $(".icon-carousel").click();
}
