
const rainbowElement = document.getElementById('rainbow')

rainbowElement.addEventListener('change', rainbowRotateStart)
document.getElementById('rainbow-label').addEventListener('keydown', (event)=> {
    if(event.key == 'Enter' || event.key == 'Space'){
        rainbowElement.checked = !rainbowElement.checked;
        rainbowRotateStart()
    }
})

function rainbowRotateStart(event) {
    let rotation = 0;
    function updateRotation() {
        if(rainbowElement.checked){
            rotation = (rotation + 1) % 360;
            document.documentElement.style.setProperty('--site-rainbow-rotate', rotation + 'deg');
            requestAnimationFrame(updateRotation);
        }
    }
    updateRotation();
}