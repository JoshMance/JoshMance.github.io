export function initProjectsSection() {
    
    $('.projectBox').on('mousedown', function() {
        $(this).toggle("shadow-medium");
        $(this).toggle("shadow-high");
    });
}