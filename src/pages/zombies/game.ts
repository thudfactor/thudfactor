import type { ActorName, Position, CollisionMap } from "./lib";
import {
	posToString,
	getPosition,
	randomPosition,
	NUM_ZOMBIES,
	cloneId,
	getOccupiedSpaces,
	getType,
} from "./lib";
import ZombieGame from "./ZombieGame";
import { tests } from "./tests";

const Game = new ZombieGame();

tests();

function removeZombiesNear([x, y]: Position) {
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
		removeZombiesAt(p);
	});
}

function teleport(e: Event) {
	if (!(e.target instanceof HTMLElement)) return;
	const newSpot = randomPosition(Game);
	const player = getPlayer();
	setPosition(player, newSpot);
	processTurn(newSpot);
}

function lastStand(e: Event) {
	const player = getPlayer();
	const { position } = getPosition(player);
	processTurn(position);
	const interval = setInterval(() => {
		if (!Game.gameIsOver) {
			processTurn(position);
		} else {
			clearInterval(interval);
		}
	}, 300);
}

function disintegrate(e: Event) {
	if (!(e.target instanceof HTMLElement)) return;
	const { position } = getPosition(getPlayer());
	removeZombiesNear(position);
	processTurn(position);
}

function reset() {
	Game.playground.replaceChildren();
	Game.score = 0;
	Game.gameIsOver = false;
	Game.levelIsOver = false;
	(Game.scoreboard as HTMLInputElement).value = "0";
	initialize();
}

document.querySelector("#LastStand")?.addEventListener("click", lastStand);
document.querySelector("#Teleport")?.addEventListener("click", teleport);
document.querySelector("#Disintegrator")?.addEventListener("click", disintegrate);
document.querySelector("#Reset")?.addEventListener("click", reset);

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

function getPlayer(): HTMLElement {
	const player = getActor("player").item(0);
	if (!(player instanceof HTMLElement)) {
		throw new Error("Player not found or is not an HTML Element");
	}
	return player;
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
	setPosition(getPlayer(), pos);
}

function processTurn(newPlayerPos: Position) {
	movePlayerTo(newPlayerPos);
	moveZombies(newPlayerPos);
	setTimeout(() => {
		const collisions = getCollisions();
		let scoreDelta = 0;
		let gameShouldBeOver = false;
		collisions.forEach((c) => {
			scoreDelta += c.zombie;
			if (c.player) {
				gameShouldBeOver = true;
				const player = getPlayer();
				player.dataset.dead = "true";
			} else if (c.zombie > 0) {
				if (!c.rubble && !c.player) {
					createRubbleAt(c.position);
				}
				removeZombiesAt(c.position);
			}
		});
		Game.score += scoreDelta;
		const nowHowManyZombies = getActor("zombie").length;
		if (!(Game.scoreboard instanceof HTMLInputElement)) {
			throw new Error("Scorefield is not an input");
		}
		Game.scoreboard.value = `${Game.score}`;
		Game.levelIsOver = nowHowManyZombies < 1;
		Game.gameIsOver = gameShouldBeOver;
		updateUI();
	}, 400);
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
	const player = getPlayer();
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

function updateUI() {
	if (Game.gameIsOver) {
		Game.scoreboard.innerText = `${Game.score}`;
		Game.tabletop.classList.add("game-over");
	} else if (Game.levelIsOver) {
		Game.tabletop.classList.add("game-won");
	} else {
		Game.tabletop.classList.remove("game-over");
		Game.tabletop.classList.remove("game-won");
	}
}

initialize();
