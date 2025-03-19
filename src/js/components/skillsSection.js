export function initSkillsSection() {

    $(".resumeButton").on("click", function() {
        window.open("./src/pdfs/test.pdf", "_blank");
    });

    $(".fadeFromLeft").addClass('opacity-0');
    $(".fadeFromRight").addClass('opacity-0');

    const fadeFromLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-x-[-40px]');
                entry.target.classList.add('opacity-100', 'translate-x-0');
            }
        });
    });

    const fadeFromRightObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-x-[40px]');
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



    // var $icons = $('#skillsSection div:has(> img)');
    // var maxDistance = 0;
    // var minDistance = Number.MAX_SAFE_INTEGER;

    // for (let icon of $icons) {

    //     var divPosition = $(icon).offset();
    //     var top = divPosition.top - $(window).scrollTop();
    //     var left = divPosition.left - $(window).scrollLeft();

    //     let distance = Math.sqrt((top * top) + (left * left));
    //     maxDistance = Math.max(maxDistance, distance);
    //     minDistance = Math.min(minDistance, distance);
        
    //     $(icon).get(0).setAttribute('distance', distance);

    // }

    // $icons.sort(function(a, b) {
    //   var distanceA = parseFloat($(a).attr('distance'));
    //   var distanceB = parseFloat($(b).attr('distance'));
      
    //   return distanceA - distanceB; // Ascending order
    // });
    


    // function colourEffect() {
    // let numSteps = 2000;
    //     let stepDistance = (Math.ceil(maxDistance) - Math.floor(minDistance)) / numSteps;
    //     let step = 0;


    //     let distance = Math.floor(minDistance);
    //     while (distance <= Math.ceil(maxDistance)) {
    //         console.log("", step);

    //         step += 1;
    //         distance += stepDistance;

    //         let $iconsSubset = $icons.filter(function() {
    //             return (distance - stepDistance) <= parseInt($(this).attr('distance')) <= distance;
    //         });

    //         setTimeout(() => {
    //             $iconsSubset.each(function() {
    //                 $(this).removeClass('grayscale');
    //                 setTimeout(() => {
    //                     $(this).addClass('grayscale');
    //                 }, 1000);
    //             });
    //         }, step*1000);
    //     }

    // }

}