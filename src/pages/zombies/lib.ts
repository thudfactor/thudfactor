import type ZombieGame from "./ZombieGame";

export type ActorName = "zombie" | "player" | "rubble";

export type Position = [number, number];

export type CollisionMap = {
	position: Position;
	zombie: number;
	player: boolean;
	rubble: boolean;
	total: number;
};

export const NUM_ZOMBIES = 10;
export const ROWS = 20;
export const COLS = 20;

export function generateBoard(rows: number, columns: number) {
	const values: Position[] = [];
	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < columns; x++) {
			values.push([x, y]);
		}
	}
	return values;
}

export function filterBoardByPositions(board: Position[], exclude: Position[]) {
	const filtered = board.filter((p) => {
		return !exclude.some((x) => x[0] === p[0] && x[1] === p[1]);
	});
	return filtered;
}

export function getHTML(id: string, parent: HTMLElement | Document = document): HTMLElement | null {
	const selected = parent.querySelector(id);
	if (!selected) return null;
	if (!(selected instanceof HTMLElement))
		throw new Error(`Node selected by ${id} is not an HTMLElement`);
	return selected;
}

export function getPositionString(sprite: HTMLElement) {
	if (!sprite.dataset.position) {
		console.error(sprite);
		throw new Error("Sprite has no position information");
	}
	return sprite.dataset.position;
}

export function getPosition(sprite: HTMLElement) {
	const positionString = getPositionString(sprite);
	const position = stringToPos(positionString);
	return { positionString, position };
}

export function stringToPos(posString: string): Position {
	const [x, y] = posString.split(",").map((v) => +v);
	return [x, y];
}

export function posToString([x, y]: Position): string {
	return `${x},${y}`;
}

export function getOccupiedSpaces(game: ZombieGame) {
	return game.playground.querySelectorAll("[data-position]");
}

export function getOccupiedPositions(game: ZombieGame) {
	const spaces = getOccupiedSpaces(game);
	const positions: Position[] = [];
	spaces.forEach((occupied) => {
		if (!(occupied instanceof HTMLElement) || !occupied.dataset.position) return;
		positions.push(stringToPos(occupied.dataset.position));
	});
	return positions;
}

export function getType(sprite: HTMLElement): ActorName | null {
	if (sprite.matches(":has(.zombie)")) return "zombie";
	if (sprite.matches(":has(.rubble)")) return "rubble";
	if (sprite.matches(":has(.player)")) return "player";
	return null;
}

export function freeSpots(game: ZombieGame) {
	return filterBoardByPositions(game.spaces, getOccupiedPositions(game));
}

export function randomPosition(game: ZombieGame) {
	const freeList = freeSpots(game);
	const randomIndex = Math.floor(Math.random() * freeList.length);
	return freeList[randomIndex];
}

export function cloneId(targetId: string): HTMLElement {
	const template = getHTML(targetId);

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
