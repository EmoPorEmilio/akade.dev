import './style.css'

document.querySelector<HTMLDivElement>('body')!.innerHTML = `
<main>
  <div class="logo-container">
      <canvas id="main-canvas"></canvas>
      <img class="logo" src="/logo.png"></img>
  </div>
</main>
`;

const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;
canvas.width = document.body.getBoundingClientRect().width;
canvas.height = document.body.getBoundingClientRect().height;
const context = canvas.getContext('2d')!;
const colors = {
  fuchsia: '#DF5C9A',
  background: '#141414'
}
context.fillStyle = colors.fuchsia;
context.beginPath();
context.arc(92, canvas.height / 2, 55, 0, 2 * Math.PI);
context.fill();
context.beginPath();
context.fillStyle = colors.background;
context.arc(92, canvas.height / 2, 40, 0, 2 * Math.PI);
context.fill();