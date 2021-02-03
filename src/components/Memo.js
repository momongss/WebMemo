"use strict";

import { getformattedTime } from "../utils/time.js";
import { getMousePos } from "../utils/eventHandler.js";

import { MEMOWIDTH, MEMOHEIGHT } from "../const/memoSize.js";

export default function createNewMemo(
  id,
  initData,
  mainContainer,
  deleteMemoById
) {
  console.log(mainContainer);

  const Memo = {
    id: id,
    pos: initData.pos,
    createTime: initData.createTime,
    modifyTime: initData.modifyTime,
    text: initData.text,
  };

  const $element = document.createElement("textarea");
  $element.className = "new-note-content";
  $element.style.position = "absolute";
  $element.style.left = `${Memo.pos.x}px`;
  $element.style.top = `${Memo.pos.y}px`;
  $element.style.width = `${MEMOWIDTH}px`;
  $element.style.height = `${MEMOHEIGHT}px`;
  $element.style.zIndex = "2147483647";
  $element.style.fontSize = "14px";

  $element.focus();

  mainContainer.addEventListener("mousemove", trackingMouse);
  mainContainer.addEventListener("keyup", removeElement);
  $element.addEventListener("click", stopTracking);
  $element.addEventListener("keyup", removeElement);

  let timeout = null;
  $element.addEventListener("keydown", (e) => {
    e.stopPropagation();
  });
  $element.addEventListener("keyup", function storeMemo(e) {
    e.stopPropagation();

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      Memo.modifyTime = getformattedTime();
      Memo.text = $element.value;
      console.log("생성시간:", Memo.modifyTime);
    }, 1000);
  });

  mainContainer.appendChild($element);

  function stopTracking() {
    // 메모가 고정되면, 필요없는 이벤트 리스너들을 삭제
    mainContainer.removeEventListener("mousemove", trackingMouse);
    mainContainer.removeEventListener("keyup", removeElement);
    $element.removeEventListener("click", stopTracking);

    Memo.createTime = getformattedTime();
    Memo.modifyTime = Memo.createTime;

    console.log("new Memo created");
  }

  function removeElement(e) {
    if (e.key === "Escape") {
      deleteMemoById(id);
      $element.remove();
    }
  }

  function trackingMouse(e) {
    Memo.pos = getMousePos(e, mainContainer);

    $element.style.left = `${Memo.pos.x}px`;
    $element.style.top = `${Memo.pos.y}px`;
  }

  return Memo;
}
