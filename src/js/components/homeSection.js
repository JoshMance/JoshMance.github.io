export function initHomeSection() {

    let commaCount = 0;


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function isEmoji(char) {
        const emojiRegex = /\p{Extended_Pictographic}/u;
        return emojiRegex.test(char);
    }
   
   
    async function typewriter($div, text, index, isbold, insideAccent) {
        // Clear the cursor if it exists
        $div.find('.cursor').remove();
   
        // Add the current character to the div
        if (index < text.length) {
            let char = text[index];
            let speed = 20;
   
            // Adjust speed for spaces and punctuation
            if (char === " ") {
                speed += getRandomInt(10, 15);
            } else if (char === ",") {
                speed += 5;
            }
            // else if (isEmoji(char)) {
            //     speed += 120;
            // }
   
            // If the character is "*", toggle bold styling
            if (char === "*") {
                isbold = !isbold;
                setTimeout(() => typewriter($div, text, index + 1, isbold, insideAccent), speed);
                return;
            }

   
            // If the character is "_", toggle accent mode
            if (char === "_") {
                insideAccent = !insideAccent;
                setTimeout(() => typewriter($div, text, index + 1, isbold, insideAccent), speed);
                return;
            }
   
    
            let tagClass = "";
            tagClass += insideAccent ? "text-accent " : "";
            tagClass += isbold ? "font-semibold " : "";

            let tag = (char === "/") ? "p" : "span";

            let newText = (insideAccent || isbold)
                ? `<${tag} class="${tagClass.trim()}">${char}</${tag}>`
                : char;
   
            $div.append(newText);


            if (isbold) {
                $div.children().last().css("font-size", "2.2rem");
            }
    
   
            // Add extra elements for punctuation
            if (char === "," && commaCount == 0) {
                commaCount += 1;
                // Add the cursor and a new line
                $div.append('<span class="font-bold text-accent cursor"> |</span>');
                $div.append("<div></div>");
            } else if (isEmoji(char)) {
                // Add the cursor and a new longer line
                $div.append('<span class="font-bold text-accent cursor"> |</span>');
                $div.append("<div> &nbsp;</div>");
            }
            else {
                // Add or update the cursor
                $div.append('<span class="font-bold text-accent cursor"> |</span>');
            }
   
            // Continue typing after a delay
            setTimeout(() => typewriter($div, text, index + 1, isbold, insideAccent), speed);
            
        } else {
            // At the end of typing, remove the cursor
            $div.find('.cursor').remove();
        }
    }



    // $(document).mousemove(function(event) {
    //     console.log("Mouse position: X=" + event.pageX + ", Y=" + event.pageY);
    // });

    $("#downArrow").click((e) => {
        $('#aboutNavButton').mousedown();
        $("#downArrow").fadeOut();
    });

    $("#downArrow").toggle();
    
    setTimeout(() => {
        // Running typewriter effect for the typewriter class
        // by first saving the text, making the div visible and then passing 
        // the text to the typewriter function to be (re-) written
        let $div = $(".type-out");
        let text = Array.from($div.text());
        $div.empty();
        $div.show();
        typewriter($div, text, 0, false);
    }, 2000);

    setTimeout(() => {
        $("#downArrow").fadeIn();
    }, 3000);



    const fadeFromRightObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-x-[-40px]');
                entry.target.classList.add('opacity-100', 'translate-x-0');
            }
        });
    });

    
    const options = {
        threshold: 1,
    };

    $(".fadeFromRight").each(function() {
        fadeFromRightObserver.observe(this, options);
    });




}