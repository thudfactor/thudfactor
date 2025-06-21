let gameboard;
let ctx;

const maxLevel = 4; // Controls recursion. There's a lot of it, so don't set this too awful high
const rotations = 8; // Split the circle into this many segments

const color = "hsl(10 30% 85% / 1)"; // Color of trunks
const color2 = "hsl(10 70% 60% / 1)"; // Color of fruit
const scale = 0.55; // How much each recursion shrinks
const spread = Math.PI / 8; // How wide minor branches are at the fork

function drawBranch(level = 0) {
	if (level > maxLevel) {
		return;
	}
	const len = gameboard.width / 4;

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(len, 0);
	ctx.stroke();
	ctx.fillStyle = color2;
	ctx.beginPath();
	ctx.arc(len + 15, 0, 5, 0, Math.PI * 2);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(len, 15, 4.8, 0, Math.PI * 2);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(len, -15, 4.8, 0, Math.PI * 2);
	ctx.fill();
	ctx.save();

	ctx.translate(len - 30, 0);
	ctx.rotate(spread);
	ctx.scale(scale, scale);
	drawBranch(level + 1);
	ctx.restore();
	ctx.save();

	ctx.translate(len - 30, 0);
	ctx.rotate(spread * -1);
	ctx.scale(scale, scale);
	drawBranch(level + 1);
	ctx.restore();
	ctx.save();

	ctx.translate(len - 60, 0);
	ctx.rotate(spread);
	ctx.scale(scale, scale);
	drawBranch(level + 1);
	ctx.restore();
	ctx.save();

	ctx.translate(len - 60, 0);
	ctx.rotate(spread * -1);
	ctx.scale(scale, scale);
	drawBranch(level + 1);
	ctx.restore();
}

function animate() {
	for (let i = 1; i <= rotations; i++) {
		drawBranch();
		ctx.rotate(Math.PI / (rotations / 2));
	}
}

window.addEventListener("load", () => {
	gameboard = document.getElementById("fractal-tree");
	ctx = gameboard.getContext("2d");

	ctx.translate(gameboard.width / 2, gameboard.width / 2);
	ctx.strokeStyle = color;
	ctx.lineWidth = 4;
	ctx.lineCap = "round";
	animate();
});
