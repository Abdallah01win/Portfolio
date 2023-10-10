export function circler_text(elementClass, text) {
  const RING = document.querySelector(`.${elementClass}`);

  const OPTIONS = {
    text: text,
    size: 1,
    spacing: 1,
  };

  const onUpdate = () => {
    RING.innerHTML = "";
    const CHARS = OPTIONS.text.split("");
    RING.style.setProperty("--total", CHARS.length);
    RING.style.setProperty("--character-width", OPTIONS.spacing);
    RING.style.setProperty("--font-size", OPTIONS.size);
    const HIDDEN_CHARS = Object.assign(document.createElement("span"), {
      ariaHidden: true,
    });

    for (let c = 0; c < CHARS.length; c++) {
      HIDDEN_CHARS.innerHTML += `<span style="--index: ${c}">${CHARS[c]}</span>`;
    }
    RING.appendChild(HIDDEN_CHARS);
    RING.innerHTML += `<span class="sr-only">${OPTIONS.text}</span>`;
  };

  onUpdate();
}
