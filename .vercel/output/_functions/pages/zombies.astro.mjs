import { a as createComponent, r as renderComponent, k as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$Experiment } from '../chunks/Experiment_C4dYHHaz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "zombie-dodge", "zombie-dodge", { "data-astro-cid-4rgxri5b": true }, { "default": () => renderTemplate` <template id="player-template" data-astro-cid-4rgxri5b> ${maybeRenderHead()}<div data-position="9,9" class="position" data-astro-cid-4rgxri5b> <div class="player" data-astro-cid-4rgxri5b> <div class="sprite" data-astro-cid-4rgxri5b><button data-position="0,0" class="stop" data-astro-cid-4rgxri5b>🤷‍♂️</button></div> <button data-position="0,-1" class="n" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="0,1" class="s" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="1,0" class="e" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="-1,0" class="w" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="-1,-1" class="nw" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="-1,1" class="sw" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="1,-1" class="ne" data-astro-cid-4rgxri5b>⬆︎</button> <button data-position="1,1" class="se" data-astro-cid-4rgxri5b>⬆︎</button> </div> </div> </template> <template id="zombie-template" data-astro-cid-4rgxri5b> <div data-position="-1,-1" class="position" data-astro-cid-4rgxri5b> <div class="zombie" data-astro-cid-4rgxri5b>🧟</div> </div> </template> <template id="rubble-template" data-astro-cid-4rgxri5b> <div data-position="-1,-1" class="position" data-astro-cid-4rgxri5b> <div class="rubble" data-astro-cid-4rgxri5b>💩</div> </div> </template> <div id="canvas" data-astro-cid-4rgxri5b> <div id="controls" data-astro-cid-4rgxri5b> <button id="LastStand" data-astro-cid-4rgxri5b>Last Stand (L)</button> <button id="Teleport" data-left="2" data-astro-cid-4rgxri5b>Teleport (T)</button> <button id="Disintegrator" data-left="2" data-astro-cid-4rgxri5b>Disintegrator (D)</button> <button id="Reset" data-astro-cid-4rgxri5b>Reset (R)</button> </div> <div id="board" data-astro-cid-4rgxri5b></div> <div class="gameScreen" id="gameOver" data-astro-cid-4rgxri5b>You are zombie chow.</div> <div class="gameScreen" id="gameWon" data-astro-cid-4rgxri5b>You defeated all the zombies!</div> <div id="feedback" data-astro-cid-4rgxri5b> <label data-astro-cid-4rgxri5b>Score: <input type="number" value="0" id="scoreField" data-astro-cid-4rgxri5b></label> </div> </div> ` })} ${renderScript($$result, "/Users/johnwilliams/projects/thudfactor/src/components/ZombieDodge/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ZombieDodge/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Experiment", $$Experiment, { "title": "Zombie Dodge" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ZombieDodge", $$Index$1, {})} ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/zombies/index.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/zombies/index.astro";
const $$url = "/zombies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
