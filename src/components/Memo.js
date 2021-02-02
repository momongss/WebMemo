const MEMOWIDTH = 190;
const MEMOHEIGHT = 150;

export default class Memo {
  constructor() {
    const $element = document.createElement("textarea");
    $element.className = "new-note-content";
    $element.style.position = "absolute";
    $element.style.width = `${MEMOWIDTH}px`;
    $element.style.height = `${MEMOHEIGHT}px`;
    $element.style.zIndex = "2147483647";
    $element.style.fontSize = "14px";

    $element.focus();

    window.addEventListener("mousemove", trackingMouse);
    $element.addEventListener("click", () => {
      window.removeEventListener("mousemove", trackingMouse);

      console.log("new Memo created");
    });

    document.body.appendChild($element);

    function trackingMouse(e) {
      let posX = e.pageX - 10;
      let posY = e.pageY - 10;
      if (posX < 0) posX = 0;
      else if (posX + MEMOWIDTH > document.body.offsetWidth)
        posX = document.body.offsetWidth - MEMOWIDTH;
      if (posY < 0) posY = 0;
      else if (posY + MEMOHEIGHT > document.body.scrollHeight)
        posY = document.body.scrollHeight - MEMOHEIGHT;

      $element.style.left = `${posX}px`;
      $element.style.top = `${posY}px`;
    }
  }
}
