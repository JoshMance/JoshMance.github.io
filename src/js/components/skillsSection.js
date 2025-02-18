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



}