let block = document.querySelector('.red');
let score = document.querySelector('.score');
let audio = document.querySelector('.audio');
let volume = document.querySelector('.volume');
let mute = document.querySelector('.mute');
volume.addEventListener('click', () => {
    mute.style.display = 'inline-block';
    volume.style.display = 'none';
    audio.muted = true;
});
mute.addEventListener('click', () => {
    mute.style.display = ' none';
    volume.style.display = 'inline-block';
    audio.muted = false;
});

let cuont = 0;
score.innerHTML = '';
// score.style.fontSize = '15px';
function createBubble() {
    let bubbles = setInterval(() => {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        block.appendChild(bubble);

        let size = `${Math.floor(Math.random() * (70 - 30) + 30)}px`;

        let topPosition = `${Math.floor(Math.random() * (85 - 10) + 10)}%`;
        let leftPosition = `${Math.floor(Math.random() * (85 - 10) + 10)}%`;
        bubble.style.top = topPosition;
        bubble.style.left = leftPosition;
        bubble.style.width = size;
        bubble.style.height = size;

        bubble.addEventListener('click', () => {
            audio.play();
            bubble.style.display = 'none';
            cuont += 1;
            score.innerHTML = cuont;
            // score.style.fontSize = '50px';
        });

        if (cuont > 100) {
            clearInterval(bubbles);
        }
    }, 500);
}

createBubble();
