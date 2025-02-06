export function initSkillsSection() {

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