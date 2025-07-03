import './chunks/_astro_actions_8Tfj1QoI.mjs';
import * as z from 'zod';
import { d as db, C as Comment } from './chunks/_astro_db_B_HXa1Yn.mjs';
import { d as defineAction } from './chunks/server_DHkN6osW.mjs';

const server = {
  addComment: defineAction({
    accept: "form",
    input: z.object({
      postSlug: z.string(),
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Valid email is required"),
      message: z.string().min(1, "Comment cannot be empty")
    }),
    handler: async ({ postSlug, name, email, message }) => {
      const comment = await db.insert(Comment).values({
        postSlug,
        name,
        email,
        message,
        createdAt: /* @__PURE__ */ new Date()
      }).returning();
      return comment[0];
    }
  })
};

export { server };
