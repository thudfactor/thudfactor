import { db, Comment } from "astro:db";

export default async function () {
	//@ts-expect-error
	await db.insert(Comment).values([
		{
			postSlug: "2025/04/why-scrum-fails",
			name: "Jamie",
			email: "jamie@turso.tech",
			message: "Great post!",
			createdAt: new Date(),
		},
		{
			postSlug: "2025/04/why-scrum-fails",
			name: "Jamie",
			email: "jamie@turso.tech",
			message: "Another great post!",
			createdAt: new Date(),
		},
	]);
}
