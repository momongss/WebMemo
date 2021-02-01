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

    console.log(this);

    window.addEventListener("mousemove", this.trackingMouse);
    $element.addEventListener("click", () => {
      console.log("click");
      window.removeEventListener("mousemove", this.trackingMouse);
    });

    this.$element = $element;

    document.body.appendChild(this.$element);

    console.log("new Memo generated", this);
  }

  trackingMouse(e) {
    console.log(this);

    let posX = e.pageX - 10;
    let posY = e.pageY - 10;
    if (posX < 0) posX = 0;
    else if (posX + this.noteWidth > document.body.offsetWidth)
      posX = document.body.offsetWidth - this.noteWidth;
    if (posY < 0) posY = 0;
    else if (posY + this.noteHeight > document.body.scrollHeight)
      posY = document.body.scrollHeight - this.noteHeight;

    this.$element.style.left = `${posX}px`;
    this.$element.style.top = `${posY}px`;
  }
}
