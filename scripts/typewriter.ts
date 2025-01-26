import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

export function typeWriterEffect(paragraphs: Array<HTMLElement>, onFinish?: () => void) {
    // Animation for each paragraph
    gsap.registerPlugin(TextPlugin);

    let completedCount = 0;

    // Select all paragraphs with the class 'anim-typewriter'
    //const paragraphs = document.querySelectorAll('.text-content p');

    // Iterate over each paragraph
    paragraphs.forEach((paragraph, index) => {
        // Get the text content of the paragraph
        const textContent = paragraph.innerHTML;
        const text = paragraph.textContent?.trim();
        
        // Clear the paragraph's content
        paragraph.textContent = '';

        // Create a new timeline for each paragraph
        const timeline = gsap.timeline({
            delay: index * 1.075, // Delay each timeline
            onComplete: () => {
                // Increment the completed count
                completedCount++;

                // Check if all animations are done
                if (completedCount === paragraphs.length && onFinish) {
                    onFinish(); // Trigger the callback
                }
            },
        });
        // Add the typing animation to the timeline
        timeline.to(paragraph, {
            duration: 1, // Adjust the duration as needed
            text: text, // Set the text using TextPlugin
            ease: "power4.out", // Adjust the easing as needed
            onComplete(){
                timeline.to(paragraph, {
                    text: textContent
                });
            }
        });
    });
}
