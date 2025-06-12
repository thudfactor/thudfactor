class Walker {
	x;
	y;

	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}

	show() {
		console.log(step);
		stroke(255);
		strokeWeight(10);
		point(this.x, this.y);
	}

	step() {
		const choice = floor(random(4));
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
