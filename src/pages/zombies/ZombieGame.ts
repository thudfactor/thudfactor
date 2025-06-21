import { COLS, generateBoard, getHTML, ROWS, type Position } from "./lib";

export default class ZombieGame {
	tabletop: HTMLElement;
	playground: HTMLElement;
	scoreboard: HTMLElement;
	score: number;
	gameIsOver: boolean;
	spaces: Position[];

	constructor() {
		const tabletop = getHTML("#canvas");
		const playground = getHTML("#board");
		const scoreboard = getHTML("#score");

		if (!tabletop || !playground || !scoreboard) {
			throw new Error("Missing critical infrastructure");
		}

		this.scoreboard = scoreboard;
		this.playground = playground;
		this.tabletop = tabletop;
		this.score = 0;
		this.gameIsOver = false;
		this.spaces = generateBoard(ROWS, COLS);
	}
}
