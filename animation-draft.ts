const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
canvas.width = document.body.getBoundingClientRect().width;
canvas.height = document.body.getBoundingClientRect().height;
const context = canvas.getContext('2d')!;
const colors = {
    fuchsia: '#DF5C9A',
    blue: '#273238',
    background: '#141414'
}

let height = canvas.height;

const resizeRect = () => {
    height -= 10;
}

setInterval(resizeRect, 50);
const drawLoop = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = colors.background;
    context.fillRect(0, 0, canvas.width, canvas.height);
    console.log(height);
    drawLogo();
    drawRect(height);
    requestAnimationFrame(drawLoop);
}

const drawLogo = () => {
    context.fillStyle = colors.fuchsia;
    context.beginPath();
    context.arc(92, canvas.height / 2, 55, 0, 2 * Math.PI);
    context.fill();
    context.beginPath();
    context.fillStyle = colors.background;
    context.arc(92, canvas.height / 2, 40, 0, 2 * Math.PI);
    context.fill();
}

const drawRect = (height: number) => {
    context.fillStyle = colors.background;
    context.fillRect(0, 0, canvas.width, height);
}

requestAnimationFrame(drawLoop);
