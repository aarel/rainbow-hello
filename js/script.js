// Names to greet
const names = ["Babe", "Emma", "Marley", "Harley", "Silas", "Maggie", "Lizard"];
let shuffledNames = [...names]; // Initialize shuffled list

// Random fonts
const fonts = ["Arial", "Courier New", "Georgia", "Tahoma", "Verdana", "Times New Roman", "Comic Sans MS"];

// Function to shuffle an array
const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

// Initialize shuffled list
shuffledNames = shuffleArray(shuffledNames);

// Event listener for the button
document.getElementById("change-btn").addEventListener("click", () => {
    const helloWorld = document.getElementById("hello-world");

    // Get the next name from the shuffled list
    const nextName = shuffledNames.pop();

    // If the list is empty, re-shuffle and restart
    if (!shuffledNames.length) {
        shuffledNames = shuffleArray([...names]);
    }

    // Generate random color and font
    const randomColor = ["#f92672", "#a6e22e", "#66d9ef", "#fd971f", "#ae81ff", "#f8f8f2"][Math.floor(Math.random() * 6)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

    // Update text, color, and font
    helloWorld.textContent = `Hi, ${nextName}!`;
    helloWorld.style.color = randomColor;
    helloWorld.style.fontFamily = randomFont;
});

