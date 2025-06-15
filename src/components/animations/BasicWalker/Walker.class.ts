import type p5 from "p5";

class Walker {
	x: number;
	y: number;
	p: p5;

	constructor(p: p5) {
		this.x = p.width / 2;
		this.y = p.height / 2;
		this.p = p;
	}

	show() {
		this.p.stroke(255);
		this.p.strokeWeight(10);
		this.p.point(this.x, this.y);
	}

	step() {
		const choice = this.p.floor(this.p.random(4));
		if (choice === 0) {
			this.x++;
		} else if (choice === 1) {
			this.x--;
		} else if (choice === 2) {
			this.y++;
		} else if (choice === 3) {
			this.y--;
		}
	}
}

export default Walker;
