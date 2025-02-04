export function initAboutSection() {

    const fadeFromLeftObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log($(entry.target).offset().left);
                entry.target.classList.remove('opacity-0', 'translate-x-[-40px]');
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

}