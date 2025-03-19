export function initProjectsSection() {
    
    $(window).on('scroll', function() {
        var targetDiv = $('#skillsSection');
    
        var targetDivOffset = targetDiv.offset().top;
        var targetDivHeight = targetDiv.height();
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
    
        // Check if the halfway point of targetDiv is in the middle of the screen
        var targetDivHalfway = targetDivOffset + targetDivHeight / 2;
    
        if (targetDivHalfway > scrollTop + windowHeight / 2) {
            $('#backgroundBlue').css('z-index', '-1');
            $('#backgroundBlue').show()
            $('#backgroundRed').css('z-index', '-10');
        } else {
            $('#backgroundBlue').css('z-index', '-10');
            $('#backgroundRed').css('z-index', '-1');
            $('#backgroundRed').show()
        }
    });
}