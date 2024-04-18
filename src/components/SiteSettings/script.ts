const $ = document.querySelector.bind(document);

const form: HTMLFormElement | null = $("form#site-settings");
const dialogButton: HTMLButtonElement | null = $("button#settings-button");
const settingsClose: HTMLButtonElement | null = $("button#site-settings-close");
const dialog: HTMLDialogElement | null = $("dialog#site-settings-dialog");

function closeOnBackdropClicked(e: PointerEvent) {
	if (!dialog) return;
	const { clientX: clickedX, clientY: clickedY } = e;
	const { x, y, width, height } = dialog.getBoundingClientRect();
	const intersectsHorizontal = clickedX >= x && clickedX <= x + width;
	const intersectsVertical = clickedY >= y && clickedY <= y + height;
	if (!intersectsHorizontal || !intersectsVertical) {
		dialog?.close();
	}
}

function setFont(font: string, store: boolean = true) {
	const { style } = document.documentElement;
	font === ""
		? style.removeProperty("--font-default")
		: style.setProperty("--font-default", `var(${font})`);

	if (!store) return;
	font === "" ? localStorage.removeItem("font") : localStorage.setItem("font", font);
}

function setTheme(theme: string, store: boolean = true) {
	const { dataset } = document.documentElement;
	dataset.theme = theme === "" ? getDefaultTheme() : theme;
	if (!store) return;
	theme === "" ? localStorage.removeItem("theme") : localStorage.setItem("theme", theme);
}

function submitSettings(e: SubmitEvent) {
	if (!form) return;
	e.preventDefault();
	new FormData(form); // will trigger the formdata event below.
}

function resetSettings() {
	setFont("");
	setTheme("");
}

function getDefaultTheme() {
	let selectedTheme = "";
	const highContrastMode = window.matchMedia("(prefers-contrast: more)").matches;
	const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	if (highContrastMode) {
		selectedTheme = darkMode ? "high-contrast-dark" : "high-contrast-light";
	} else {
		selectedTheme = darkMode ? "dark" : "";
	}
	return selectedTheme;
}

function applySettings(e: FormDataEvent) {
	const { formData } = e;
	const entries = formData.entries();
	for (const [key, value] of entries) {
		if (key === "font") {
			setFont(value as string);
		} else if (key === "theme") {
			setTheme(value as string);
		}
	}
}

dialogButton?.addEventListener("pointerdown", () => dialog?.showModal());
settingsClose?.addEventListener("pointerdown", () => dialog?.close());
dialog?.addEventListener("pointerdown", closeOnBackdropClicked);
form?.addEventListener("submit", submitSettings);
form?.addEventListener("reset", resetSettings);
form?.addEventListener("formdata", applySettings);

// load font preferences from local storage. If not found, use the default.
const selectedFont = localStorage.getItem("font");
if (selectedFont) {
	setFont(selectedFont, false);
	form
		?.querySelector(`[name=font] option[value="${selectedFont}"]`)
		?.setAttribute("selected", "selected");
}

// load theme preferences from local storage. If not found, we calculate
// the default based on system preferences.
let selectedTheme = localStorage.getItem("theme");
if (selectedTheme) {
	setTheme(selectedTheme, false);
	form
		?.querySelector(`[name=theme] option[value="${selectedTheme}"]`)
		?.setAttribute("selected", "selected");
} else {
	selectedTheme = getDefaultTheme();
}
setTheme(selectedTheme, false);
