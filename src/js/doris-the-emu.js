const template = document.createElement('template');

/** Selects a quote at random from the data list and returns it.
 *  Also removes that quote from the available pool until that
 *  pool is empty, at which point it resets the pool to the
 *  original list.
 */
function superRandom() {
  if (workingQuotes.length === 0) {
    workingQuotes = quotes.slice();
  }
  const index = Math.floor(Math.random() * workingQuotes.length);
  const quote = workingQuotes[index];
  workingQuotes = workingQuotes.filter((_, i) => i !== index);
  return quote;
}

const quotes = [
  "Move aside, and let the man go through",
  "I think it’s hot the way she looks left a lot",
  "Doesn’t matter if you’re minor or major",
  "You get the ankles and I’ll get the wrists",
  "I want a book that’ll make me drunk",
  "Thank you for blessing me with a mind to rhyme and two hype feet",
  "Revved up like a deuce, another runner in the night",
  "There ain’t no rest for the wicked until we close our eyes for good",
  "Might as well face it, you’re addicted to spuds",
  "Back on the set and coverin’ all bets",
  "Moving to the country, gonna eat a lot of peaches",
  "It's just your jive talkin’ that gets in the way",
  "I can gather all the news I need on the weather report",
  "Shock me like an electric eel",
  "That ain’t workin’, that’s the way you do it",
  "Birds and snakes and aeroplanes, and Lenny Bruce is not afraid",
  "All we want is life beyond the Thunderdome",
  "When you believe in things that you don’t understand, then you suffer",
  "Hip-hop got turned into hit pop",
];

let workingQuotes = quotes.slice();

template.innerHTML = `
<style>
  :host {
    display: block;
  }
  div {
    position: absolute;
    inset: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  button {
    background: none;
    border: none;
    padding: 0;
  }
  #doris-tooltip {
    position: absolute;
    top: 0;
    left: 80%;
    width: max-content;
    font-size: 14px;
    font-family: sans-serif;
    border: 1px solid black;
    padding: 0.5em;
    line-height: 1.5;
    background: #030303;
    color: white;
    border-radius: 0.5em;
    opacity: 0;
    mouse-events: none;
    transition: opacity 0.2s ease-in-out, left 0.2s ease-in-out;
  }

  #doris-tooltip.active {
    opacity: 1;
    left: calc(100% + .5em);
  }

    #doris-tooltip::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -.25rem;
      width: .5rem;
      height: .5rem;
      background: black;
      transform: translateY(-50%) rotate(45deg);
      z-index: -1;
    }
</style>
<div>
  <img
    src="/img/doris.webp"
    alt="Cartoon image of Doris the Emu" />
</div>
<div id="doris-tooltip">
  Might as well face it, you’re addicted to spuds
</div>
`;

class DorisTheEmu extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const doris = this._shadowRoot.querySelector('img');
    const tooltip = this._shadowRoot.querySelector('#doris-tooltip');
    doris.addEventListener('mouseenter', () => {
      tooltip.classList.add('active');
      tooltip.textContent = superRandom();
    });
    doris.addEventListener('mouseleave', () => {
      tooltip.classList.remove('active');
    });
  }
}

window.customElements.define('doris-the-emu', DorisTheEmu);