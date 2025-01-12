export function initHomeSection() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
   
    async function typewriter($div, text, index, isbold, insideAccent) {
        // Clear the cursor if it exists
        $div.find('.cursor').remove();
   
        // Add the current character to the div
        if (index < text.length) {
            let char = text.charAt(index);
            let speed = getRandomInt(20, 30);
   
            // Adjust speed for spaces and punctuation
            if (char === " ") {
                speed += getRandomInt(30, 40);
            } else if (char === "," || char === "!") {
                speed += 1200;
            }
   
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
   
            let spanClass = "";
            spanClass += insideAccent ? "text-accent " : "";
            spanClass += isbold ? "font-semibold text-[2rem]" : "";
   
            let newText = (insideAccent || isbold)
                ? `<span class="${spanClass.trim()}">${char}</span>`
                : char;
   
            $div.append(newText);
   
            // Add extra elements for punctuation
            if (char === ",") {
                // Add the cursor and a new line
                $div.append('<span class="font-bold text-accent cursor"> |</span>');
                $div.append("<div></div>");
            } else if (char === "!") {
                // Add the cursor and a new longer line
                $div.append('<span class="font-bold text-[2rem] text-accent cursor"> |</span>');
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


    // Running typewriter effect for the typewriter class
     // by first saving the text, making the div visible and then passing 
     // the text to the typewriter function to be (re-) written
     let $div = $(".type-out");
     let text = $div.text();
     $div.empty();
     $div.show();
     typewriter($div, text, 0, false);
   
}