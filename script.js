document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('grid-container');
    const newGridBtn = document.getElementById('new-grid-btn');
    const resetGridBtn = document.getElementById('reset-grid-btn');
    const gridSizeInput = document.getElementById('grid-size-input');
    const gridSize = 600; // Fixed grid size in pixels

    function createGrid(squaresPerSide) {
        container.innerHTML = ''; // Clear existing grid
        const squareSize = gridSize / squaresPerSide;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const div = document.createElement('div');
            div.classList.add('grid-item');
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
            });
            container.appendChild(div);
        }
    }

    function randomRGBValue() {
        return Math.floor(Math.random() * 256);
    }

    newGridBtn.addEventListener('click', function() {
        let squaresPerSide = parseInt(gridSizeInput.value);

        if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            createGrid(squaresPerSide);
        }
    });

    resetGridBtn.addEventListener('click', function() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = '#fff'; // Reset color to white
        });
    });

    // Initialize default grid
    createGrid(16);
});
