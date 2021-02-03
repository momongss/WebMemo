import { MEMOWIDTH, MEMOHEIGHT } from "../const/memoSize.js";

export function getMousePos(e, mainContainer) {
  let posX = e.pageX - 10;
  let posY = e.pageY - 10;
  if (posX < 0) posX = 0;
  else if (posX + MEMOWIDTH > mainContainer.offsetWidth)
    posX = mainContainer.offsetWidth - MEMOWIDTH;
  if (posY < 0) posY = 0;
  else if (posY + MEMOHEIGHT > mainContainer.scrollHeight)
    posY = mainContainer.scrollHeight - MEMOHEIGHT;

  return { x: posX, y: posY };
}
