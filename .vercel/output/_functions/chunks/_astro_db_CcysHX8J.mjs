import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://thudfactor-comments-thudfactor.aws-us-east-1.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const Comment = asDrizzleTable("Comment", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Comment", "primaryKey": true } }, "postSlug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "postSlug", "collection": "Comment", "primaryKey": false, "optional": false } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "Comment", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "Comment", "primaryKey": false, "optional": false } }, "message": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "message", "collection": "Comment", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Comment", "default": "2025-07-03T23:31:02.967Z" } } }, "deprecated": false, "indexes": {} }, false);

export { Comment as C, db as d };
