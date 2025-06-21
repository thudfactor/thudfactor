import type { Position } from "./lib";
import { generateBoard, filterBoardByPositions } from "./lib";

// Test
export function tests() {
	const testBoard = generateBoard(10, 10);
	const occupied: Position[] = [
		[1, 3],
		[3, 6],
		[12, 12],
	];

	const result = filterBoardByPositions(testBoard, occupied);

	if (result.length !== testBoard.length - 2) {
		throw new Error(`Board not filtered correctly ${testBoard.length}`);
	}
}
