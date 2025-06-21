import type { ActorName, Position } from "./lib";
import {
	getHTML,
	posToString,
	getPosition,
	randomPosition,
	NUM_ZOMBIES,
	cloneId,
	getOccupiedSpaces,
	getType,
	stringToPos,
} from "./lib";
import ZombieGame from "./ZombieGame";
import { tests } from "./tests";

const Game = new ZombieGame();

tests();

function updateButtonCount(btn: HTMLElement) {
	const leftIndicator = getHTML(".left", btn);
	if (!leftIndicator) {
		throw new Error("Missing button indicator");
	}
	const newLeft = +leftIndicator.innerText - 1;
	leftIndicator.innerText = `${newLeft}`;
	if (newLeft === 0) {
		btn.setAttribute("disabled", "true");
	}
}

function teleport(e: Event) {
	if (!(e.target instanceof HTMLElement)) return;
	const newSpot = randomPosition(Game);
	const player = getActor("player").item(0);
	if (!(player instanceof HTMLElement)) return;
	setPosition(player, newSpot);
	processTurn(newSpot);
}

function lastStand(e: Event) {
	const player = getActor("player").item(0);
	if (!(player instanceof HTMLElement)) return;
	const playerposStr = player.dataset.position;
	if (!playerposStr) {
		throw new Error("Player missing position");
	}
	const playerPos = stringToPos(playerposStr);
	processTurn(playerPos);
	const interval = setInterval(() => {
		console.log(interval);
		if (!Game.gameIsOver) {
			processTurn(playerPos);
		} else {
			clearInterval(interval);
		}
	}, 400);
}

function disintegrate(e: Event) {
	if (!(e.target instanceof HTMLElement)) return;
	updateButtonCount(e.target);
}

document.querySelector("#LastStand")?.addEventListener("click", lastStand);
document.querySelector("#Teleport")?.addEventListener("click", teleport);
document.querySelector("#Disintegrate")?.addEventListener("click", disintegrate);

function initialize() {
	tests();
	placePlayer();
	placeZombies();
	updateUI();
}

function placePlayer() {
	const [x, y] = randomPosition(Game);
	const playerTemplate = cloneId("#player-template");
	const player = Game.playground.appendChild(playerTemplate);
	player.addEventListener("click", navigationHandler);
	setPosition(player, [x, y]);
}

function createRubbleAt(pos: Position) {
	const rubbleTemplate = cloneId("#rubble-template");
	Game.playground.appendChild(rubbleTemplate);
	setPosition(rubbleTemplate, pos);
}

function getActor(actor: ActorName) {
	return document.querySelectorAll(`[data-position]:has(.${actor})`);
}

function placeZombies() {
	for (let i = 0; i < NUM_ZOMBIES; i++) {
		const zombieTemplate = cloneId("#zombie-template");
		const pos = randomPosition(Game);
		Game.playground.appendChild(zombieTemplate);
		setPosition(zombieTemplate, pos);
	}
}

function setPosition(sprite: HTMLElement, position: Position) {
	sprite.dataset.position = posToString(position);
	const [x, y] = position;
	sprite.style.setProperty("left", `${x + 0.5}rem`);
	sprite.style.setProperty("top", `${y + 0.5}rem`);
}

type CollisionMap = {
	position: Position;
	zombie: number;
	player: boolean;
	rubble: boolean;
	total: number;
};

function getCollisions() {
	const occupiedSpaces = getOccupiedSpaces(Game);
	const checked: CollisionMap[] = [];
	occupiedSpaces.forEach((sprite) => {
		if (!(sprite instanceof HTMLElement)) return;
		const {
			position: [ox, oy],
		} = getPosition(sprite);
		const type = getType(sprite);
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

function movePlayerTo(pos: Position) {
	const player = getActor("player").item(0);
	if (!(player instanceof HTMLElement)) return;
	setPosition(player, pos);
}

function processTurn(newPlayerPos: Position) {
	movePlayerTo(newPlayerPos);
	moveZombies(newPlayerPos);
	const collisions = getCollisions();
	let scoreDelta = 0;
	let gameShouldBeOver = false;
	collisions.forEach((c) => {
		scoreDelta += c.zombie;
		if (c.player) {
			gameShouldBeOver = true;
			const player = getActor("player").item(0);
			if (player instanceof HTMLElement) {
				player.dataset.dead = "true";
			}
		} else if (c.zombie > 0) {
			if (!c.rubble && !c.player) {
				createRubbleAt(c.position);
			}
			removeZombiesAt(c.position);
		}
	});
	Game.score += scoreDelta;
	const nowHowManyZombies = getActor("zombie").length;
	Game.gameIsOver = gameShouldBeOver || nowHowManyZombies < 1;
	updateUI();
}

function navigationHandler(event: Event) {
	const clicked = event.target;
	if (!clicked || !(clicked instanceof HTMLElement) || !clicked.matches("button")) return;
	const positionedElement = clicked.closest("[data-position]");
	if (!positionedElement || !(positionedElement instanceof HTMLElement)) {
		console.log(positionedElement);
		throw new Error("Attempted navigation from an element that is not positioned");
	}
	const { position: movementVector } = getPosition(positionedElement);
	const newPlayerPos = getNextPlayerPosition(movementVector);
	processTurn(newPlayerPos);
}

function removeZombiesAt(pos: Position) {
	const occupied = getOccupiedSpaces(Game);
	occupied.forEach((o) => {
		if (!(o instanceof HTMLElement)) return;
		if (o.dataset.position !== posToString(pos)) return;
		if (o.matches(":has(.zombie)")) Game.playground.removeChild(o);
	});
}

function getNextPlayerPosition([vx, vy]: Position): Position {
	const player = getActor("player").item(0) as HTMLElement;
	const {
		position: [px, py],
	} = getPosition(player);
	const updatePos = [vx + px, vy + py] as Position;
	return updatePos;
}

function moveZombies(playerPos: Position) {
	const [px, py] = playerPos;
	const zombies = getActor("zombie");
	zombies.forEach((z) => {
		if (!(z instanceof HTMLElement)) return;
		const {
			position: [zx, zy],
		} = getPosition(z);
		let dx = px - zx;
		let dy = py - zy;
		if (dx !== 0) {
			dx = dx > 0 ? 1 : -1;
		}
		if (dy !== 0) {
			dy = dy > 0 ? 1 : -1;
		}
		const updatePos = [dx + zx, dy + zy] as Position;
		setPosition(z, updatePos);
	});
}

function reset() {
	Game.tabletop.replaceChildren();
	Game.score = 0;
	Game.gameIsOver = false;
	initialize();
}

function updateUI() {
	if (Game.gameIsOver) {
		Game.scoreboard.innerText = `${Game.score}`;
		Game.tabletop.classList.add("game-over");
	} else {
		Game.tabletop.classList.remove("game-over");
	}
}

initialize();
