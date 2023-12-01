class ColorBar extends HTMLElement {
	constructor() {
		super();
		const stepSize = 360 / this.numswatches;
		this.style.setProperty("--numswatches", this.numswatches);
		for (let i = 0; i <= this.numswatches; i++) {
			const swatch = document.createElement("div");
			swatch.classList.add("swatch");
			swatch.style.setProperty("--index", i);
			this.appendChild(swatch);
		}
	}

	get numswatches() {
		return parseInt(this.getAttribute("numswatches"));
	}
}

class LabeledSwatch extends HTMLElement {
  constructor() {
    super();
    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.setProperty("--color", this.color);
    this.appendChild(swatch);
    const label = document.createElement("div");
    label.classList.add("label");
    label.innerHTML = this.label;
    this.appendChild(label);
  }

  get color() {
    return this.getAttribute("color");
  }

  get label() {
    return this.getAttribute("label");
  }
}

window.customElements.define("color-bar", ColorBar);
window.customElements.define("labeled-swatch", LabeledSwatch);
