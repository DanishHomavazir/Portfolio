// Define an array of phrases to cycle through
const phrases = ["I am a developer", "I am a student", "I am a tech enthusiast"];

// Get the element by its ID
const typingEffectElement = document.getElementById('typing-effect');

// Initialize the index to track the current phrase
let currentPhraseIndex = 0;

// Function to update the text with typing and erasing effect
function updateText() {
    // Get the current phrase
    const currentPhrase = phrases[currentPhraseIndex];

    // Set the text content of the element
    typingEffectElement.textContent = currentPhrase;

    // Increment the index for the next phrase
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

// Call the function to start the typing effect
updateText();

// Repeat the update every few seconds
setInterval(updateText, 7000); // Change 4000 to adjust the interval in milliseconds
