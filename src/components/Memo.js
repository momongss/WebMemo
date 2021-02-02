const MEMOWIDTH = 190;
const MEMOHEIGHT = 150;

export default class Memo {
  constructor() {
    const $element = document.createElement("textarea");
    $element.className = "new-note-content";
    $element.style.position = "absolute";
    $element.style.width = `${this.noteWidth}px`;
    $element.style.height = `${this.noteHeight}px`;
    $element.style.zIndex = "2147483647";
    $element.style.fontSize = "14px";

    $element.focus();

    window.addEventListener("mousemove", this.trackingMouse);
    $element.addEventListener("click", () => {
      this.$element = $element;
      window.removeEventListener("mousemove", this.trackingMouse);
      console.log("new Memo generated");
    });

    document.body.appendChild($element);

    console.log("creating new Memo");
  }

  trackingMouse(e) {
    let posX = e.pageX - 10;
    let posY = e.pageY - 10;
    if (posX < 0) posX = 0;
    else if (posX + MEMOWIDTH > document.body.offsetWidth)
      posX = document.body.offsetWidth - MEMOWIDTH;
    if (posY < 0) posY = 0;
    else if (posY + MEMOHEIGHT > document.body.scrollHeight)
      posY = document.body.scrollHeight - MEMOHEIGHT;

    this.$element.style.left = `${posX}px`;
    this.$element.style.top = `${posY}px`;
  }
}
