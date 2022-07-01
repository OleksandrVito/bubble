let block = document.querySelector('.red');
let score = document.querySelector('.score');

let cuont = 0;
score.innerHTML = `Score: ${cuont}`;
function createBubble() {
    let bubbles = setInterval(() => {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        block.appendChild(bubble);

        let size = `${Math.floor(Math.random() * (100 - 30) + 30)}px`;

        let topPosition = `${Math.floor(Math.random() * (85 - 10) + 10)}%`;
        let leftPosition = `${Math.floor(Math.random() * (85 - 10) + 10)}%`;
        bubble.style.top = topPosition;
        bubble.style.left = leftPosition;
        bubble.style.width = size;
        bubble.style.height = size;

        bubble.addEventListener('click', () => {
            bubble.style.display = 'none';
            cuont += 1;
            score.innerHTML = `Score: ${cuont}`;
        });

        if (cuont === 1000) {
            clearInterval(bubbles);
        }
    }, 500);
}

createBubble();
