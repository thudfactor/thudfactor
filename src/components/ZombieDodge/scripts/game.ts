// *** TYPES ***
export type ActorName = "zombie" | "player" | "rubble";

export type Position = [number, number];

export type CollisionMap = {
	position: Position;
	zombie: number;
	player: boolean;
	rubble: boolean;
	total: number;
};

export interface ZombieGameConfig {
	tabletop: HTMLElement | null;
	playground: HTMLElement | null;
	scoreboard: HTMLElement | null;
}

// *** Config ***

export const NUM_ZOMBIES = 10;
export const ROWS = 20;
export const COLS = 20;
let disintegrations = 3;
let teleports = 3;

// *** Zombie Class ***

export default class ZombieGame {
	tabletop: HTMLElement;
	playground: HTMLElement;
	scoreboard: HTMLElement;
	score: number;
	gameIsOver: boolean;
	levelIsOver: boolean;
	spaces: Position[];

	generateBoard: Function;

	constructor(config: ZombieGameConfig, generateBoard: Function) {
		console.log("ZombieGame Initializing", config);
		this.generateBoard = generateBoard;

		this.tabletop = config.tabletop!;
		this.playground = config.playground!;
		this.scoreboard = config.scoreboard!;

		if (!this.tabletop || !this.playground || !this.scoreboard) {
			throw new Error("Missing critical infrastructure");
		}

		this.score = 0;
		this.gameIsOver = false;
		this.levelIsOver = false;
		this.spaces = this.generateBoard(ROWS, COLS);
	}
}

// *** Web Component ***
export class ZombieDodge extends HTMLElement {
	Game: ZombieGame;

	constructor() {
		super();
		const zombieConfig: ZombieGameConfig = {
			tabletop: this.querySelector("#canvas"),
			playground: this.querySelector("#board"),
			scoreboard: this.querySelector("#scoreField"),
		};
		this.Game = new ZombieGame(zombieConfig, this.generateBoard);
		this.querySelector("#LastStand")?.addEventListener("click", this.lastStand.bind(this));
		this.querySelector("#Teleport")?.addEventListener("click", this.teleport.bind(this));
		this.querySelector("#Disintegrator")?.addEventListener("click", this.disintegrate.bind(this));
		this.querySelector("#Reset")?.addEventListener("click", this.reset.bind(this));
		this.initialize();
		globalThis.addEventListener("keydown", this.keyhandler.bind(this));
	}

	connectedCallback = () => {
		console.log("Connected Callback");
	};

	removeZombiesNear([x, y]: Position) {
		const surroundingPos: Position[] = [
			[x - 1, y - 1],
			[x, y - 1],
			[x + 1, y - 1],
			[x - 1, y],
			[x + 1, y],
			[x - 1, y + 1],
			[x, y + 1],
			[x + 1, y + 1],
		];
		surroundingPos.forEach((p) => {
			this.removeZombiesAt(p);
		});
	}

	keyhandler(e: any) {
		if (e.repeat) return;
		if (!["l", "t", "d", "r"].includes(e.key)) return;
		switch (e.key) {
			case "l":
				this.lastStand();
				break;
			case "t":
				this.teleport();
				break;
			case "d":
				this.disintegrate();
				break;
			case "r":
				this.reset();
				break;
		}
	}

	teleport() {
		if (teleports <= 0) return;
		if (this.Game.gameIsOver || this.Game.levelIsOver) return;
		const newSpot = this.randomPosition(this.Game);
		const player = this.getPlayer();
		this.setPosition(player, newSpot);
		this.processTurn(newSpot);
		teleports--;
		if (teleports === 0) {
			this.querySelector("#Teleport")?.setAttribute("disabled", "true");
		}
	}

	lastStand() {
		if (this.Game.gameIsOver || this.Game.levelIsOver) return;
		const player = this.getPlayer();
		const { position } = this.getPosition(player);
		this.processTurn(position);
		const interval = setInterval(() => {
			if (!this.Game.gameIsOver) {
				this.processTurn(position);
			} else {
				clearInterval(interval);
			}
		}, 300);
	}

	disintegrate() {
		if (disintegrations <= 0) return;
		if (this.Game.gameIsOver || this.Game.levelIsOver) return;
		const { position } = this.getPosition(this.getPlayer());
		this.removeZombiesNear(position);
		this.processTurn(position);
		disintegrations--;
		if (disintegrations === 0) {
			this.querySelector("#Disintegrator")?.setAttribute("disabled", "true");
		}
	}

	reset() {
		this.Game.playground.replaceChildren();
		this.Game.score = 0;
		this.Game.gameIsOver = false;
		this.Game.levelIsOver = false;
		(this.Game.scoreboard as HTMLInputElement).value = "0";
		disintegrations = 3;
		teleports = 3;
		this.querySelector("#Teleport")?.removeAttribute("disabled");
		this.querySelector("#Disintegrator")?.removeAttribute("disabled");
		this.initialize();
	}

	initialize() {
		this.placePlayer();
		this.placeZombies();
		this.updateUI();
	}

	placePlayer() {
		const [x, y] = this.randomPosition(this.Game);
		const playerTemplate = this.cloneId("#player-template");
		const player = this.Game.playground.appendChild(playerTemplate);
		player.addEventListener("click", this.navigationHandler.bind(this));
		this.setPosition(player, [x, y]);
	}

	createRubbleAt(pos: Position) {
		const rubbleTemplate = this.cloneId("#rubble-template");
		this.Game.playground.appendChild(rubbleTemplate);
		this.setPosition(rubbleTemplate, pos);
	}

	getActor(actor: ActorName) {
		return this.querySelectorAll(`[data-position]:has(.${actor})`);
	}

	getPlayer(): HTMLElement {
		const player = this.getActor("player").item(0);
		if (!(player instanceof HTMLElement)) {
			throw new Error("Player not found or is not an HTML Element");
		}
		return player;
	}

	placeZombies() {
		for (let i = 0; i < NUM_ZOMBIES; i++) {
			const zombieTemplate = this.cloneId("#zombie-template");
			const pos = this.randomPosition(this.Game);
			this.Game.playground.appendChild(zombieTemplate);
			this.setPosition(zombieTemplate, pos);
		}
	}

	setPosition(sprite: HTMLElement, position: Position) {
		sprite.dataset.position = this.posToString(position);
		const [x, y] = position;
		sprite.style.setProperty("left", `${x + 0.5}rem`);
		sprite.style.setProperty("top", `${y + 0.5}rem`);
	}

	getCollisions() {
		const occupiedSpaces = this.getOccupiedSpaces(this.Game);
		const checked: CollisionMap[] = [];
		occupiedSpaces.forEach((sprite) => {
			if (!(sprite instanceof HTMLElement)) return;
			const {
				position: [ox, oy],
			} = this.getPosition(sprite);
			const type = this.getType(sprite);
			const loggedCollision = checked.find(({ position: [cx, cy] }) => cx === ox && cy === oy);
			if (!loggedCollision) {
				checked.push({
					position: [ox, oy],
					zombie: type === "zombie" ? 1 : 0,
					player: type === "player",
					rubble: type === "rubble",
					total: 1,
				});
			} else {
				loggedCollision.total += 1;
				switch (type) {
					case "player":
						loggedCollision.player = true;
						break;
					case "rubble":
						loggedCollision.rubble = true;
						break;
					case "zombie":
						loggedCollision.zombie += 1;
						break;
					default:
						throw new Error("Collision with unknown sprite type");
				}
			}
		});
		const collisions = checked.filter((c) => c.total > 1);
		return collisions;
	}

	movePlayerTo(pos: Position) {
		this.setPosition(this.getPlayer(), pos);
	}

	processTurn(newPlayerPos: Position) {
		this.movePlayerTo(newPlayerPos);
		this.moveZombies(newPlayerPos);
		setTimeout(() => {
			const collisions = this.getCollisions();
			let scoreDelta = 0;
			let gameShouldBeOver = false;
			collisions.forEach((c) => {
				scoreDelta += c.zombie;
				if (c.player) {
					gameShouldBeOver = true;
					const player = this.getPlayer();
					player.dataset.dead = "true";
				} else if (c.zombie > 0) {
					if (!c.rubble && !c.player) {
						this.createRubbleAt(c.position);
					}
					this.removeZombiesAt(c.position);
				}
			});
			this.Game.score += scoreDelta;
			const nowHowManyZombies = this.getActor("zombie").length;
			if (!(this.Game.scoreboard instanceof HTMLInputElement)) {
				throw new Error("Scorefield is not an input");
			}
			this.Game.scoreboard.value = `${this.Game.score}`;
			this.Game.levelIsOver = nowHowManyZombies < 1;
			this.Game.gameIsOver = gameShouldBeOver;
			this.updateUI();
		}, 500);
	}

	navigationHandler(event: Event) {
		const clicked = event.target;
		if (!clicked || !(clicked instanceof HTMLElement) || !clicked.matches("button")) return;
		const positionedElement = clicked.closest("[data-position]");
		if (!positionedElement || !(positionedElement instanceof HTMLElement)) {
			console.log(positionedElement);
			throw new Error("Attempted navigation from an element that is not positioned");
		}
		const { position: movementVector } = this.getPosition(positionedElement);
		const newPlayerPos = this.getNextPlayerPosition(movementVector);
		this.processTurn(newPlayerPos);
	}

	removeZombiesAt(pos: Position) {
		const occupied = this.getOccupiedSpaces(this.Game);
		occupied.forEach((o) => {
			if (!(o instanceof HTMLElement)) return;
			if (o.dataset.position !== this.posToString(pos)) return;
			if (o.matches(":has(.zombie)")) this.Game.playground.removeChild(o);
		});
	}

	getNextPlayerPosition([vx, vy]: Position): Position {
		const player = this.getPlayer();
		const {
			position: [px, py],
		} = this.getPosition(player);
		const updatePos = [vx + px, vy + py] as Position;
		return updatePos;
	}

	moveZombies(playerPos: Position) {
		const [px, py] = playerPos;
		const zombies = this.getActor("zombie");
		zombies.forEach((z) => {
			if (!(z instanceof HTMLElement)) return;
			const {
				position: [zx, zy],
			} = this.getPosition(z);
			let dx = px - zx;
			let dy = py - zy;
			if (dx !== 0) {
				dx = dx > 0 ? 1 : -1;
			}
			if (dy !== 0) {
				dy = dy > 0 ? 1 : -1;
			}
			const updatePos = [dx + zx, dy + zy] as Position;
			this.setPosition(z, updatePos);
		});
	}

	updateUI() {
		if (this.Game.gameIsOver) {
			this.Game.scoreboard.innerText = `${this.Game.score}`;
			this.Game.tabletop.classList.add("game-over");
		} else if (this.Game.levelIsOver) {
			this.Game.tabletop.classList.add("game-won");
		} else {
			this.Game.tabletop.classList.remove("game-over");
			this.Game.tabletop.classList.remove("game-won");
		}
	}
	generateBoard(rows: number, columns: number) {
		const values: Position[] = [];
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < columns; x++) {
				values.push([x, y]);
			}
		}
		return values;
	}

	filterBoardByPositions(board: Position[], exclude: Position[]) {
		const filtered = board.filter((p) => {
			return !exclude.some((x) => x[0] === p[0] && x[1] === p[1]);
		});
		return filtered;
	}

	getGameElementBySelector(id: string, parent: HTMLElement = this): HTMLElement | null {
		console.log("hi");
		const selected = parent.querySelector(id);
		if (!selected) return null;
		if (!(selected instanceof HTMLElement))
			throw new Error(`Node selected by ${id} is not an HTMLElement`);
		return selected;
	}

	getPositionString(sprite: HTMLElement) {
		if (!sprite.dataset.position) {
			console.error(sprite);
			throw new Error("Sprite has no position information");
		}
		return sprite.dataset.position;
	}

	getPosition(sprite: HTMLElement) {
		const positionString = this.getPositionString(sprite);
		const position = this.stringToPos(positionString);
		return { positionString, position };
	}

	stringToPos(posString: string): Position {
		const [x, y] = posString.split(",").map((v) => +v);
		return [x, y];
	}

	posToString([x, y]: Position): string {
		return `${x},${y}`;
	}

	getOccupiedSpaces(game: ZombieGame) {
		return game.playground.querySelectorAll("[data-position]");
	}

	getOccupiedPositions(game: ZombieGame) {
		const spaces = this.getOccupiedSpaces(game);
		const positions: Position[] = [];
		spaces.forEach((occupied) => {
			if (!(occupied instanceof HTMLElement) || !occupied.dataset.position) return;
			positions.push(this.stringToPos(occupied.dataset.position));
		});
		return positions;
	}

	getType(sprite: HTMLElement): ActorName | null {
		if (sprite.matches(":has(.zombie)")) return "zombie";
		if (sprite.matches(":has(.rubble)")) return "rubble";
		if (sprite.matches(":has(.player)")) return "player";
		return null;
	}

	freeSpots(game: ZombieGame) {
		return this.filterBoardByPositions(game.spaces, this.getOccupiedPositions(game));
	}

	randomPosition(game: ZombieGame) {
		const freeList = this.freeSpots(game);
		const randomIndex = Math.floor(Math.random() * freeList.length);
		return freeList[randomIndex];
	}

	cloneId(targetId: string): HTMLElement {
		const template = this.getGameElementBySelector(targetId);

		if (!template) {
			throw new Error(`Missing template ${targetId}`);
		}

		if (!(template instanceof HTMLTemplateElement)) {
			throw new Error(`Passed result is not a template`);
		}

		const returnable = template.content.cloneNode(true);

		if (!(returnable instanceof DocumentFragment)) {
			throw new Error(`Resulting element ${targetId} is not an HTMLElement`);
		}

		if (!(returnable.firstElementChild instanceof HTMLElement)) {
			throw new Error(`Resulting element child of ${targetId} is not an HTMLElement`);
		}

		return returnable.firstElementChild;
	}
}
