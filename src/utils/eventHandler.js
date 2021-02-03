import { MEMOWIDTH, MEMOHEIGHT } from "../const/memoSize.js";

export function getMousePos(e) {
  let posX = e.pageX - 10;
  let posY = e.pageY - 10;
  if (posX < 0) posX = 0;
  else if (posX + MEMOWIDTH > document.body.offsetWidth)
    posX = document.body.offsetWidth - MEMOWIDTH;
  if (posY < 0) posY = 0;
  else if (posY + MEMOHEIGHT > document.body.scrollHeight)
    posY = document.body.scrollHeight - MEMOHEIGHT;

  return { x: posX, y: posY };
}
