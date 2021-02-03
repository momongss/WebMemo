"use strict";

import { getformattedTime } from "../utils/time.js";
import { getMousePos } from "../utils/eventHandler.js";

import { MEMOWIDTH, MEMOHEIGHT } from "../const/memoSize.js";

export default class Memo {
  constructor(initPos) {
    let memoPos = null;
    let createTime = null;
    let modifyTime = null;

    const $element = document.createElement("textarea");
    $element.className = "new-note-content";
    $element.style.position = "absolute";
    $element.style.left = `${initPos.x}px`;
    $element.style.top = `${initPos.y}px`;
    $element.style.width = `${MEMOWIDTH}px`;
    $element.style.height = `${MEMOHEIGHT}px`;
    $element.style.zIndex = "2147483647";
    $element.style.fontSize = "14px";

    $element.focus();

    window.addEventListener("mousemove", trackingMouse);
    window.addEventListener("keyup", () => {});
    window.addEventListener("keyup", removeElement);
    $element.addEventListener("click", stopTracking);
    $element.addEventListener("keyup", removeElement);

    let timeout = null;
    $element.addEventListener("keyup", function storeMemo(e) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        modifyTime = getformattedTime();
        console.log("생성시간:", modifyTime);
      }, 1000);
    });

    document.body.appendChild($element);

    function stopTracking() {
      // 메모가 고정되면, 필요없는 이벤트 리스너들을 삭제
      window.removeEventListener("mousemove", trackingMouse);
      window.removeEventListener("keyup", removeElement);
      $element.removeEventListener("click", stopTracking);

      createTime = getformattedTime();
      modifyTime = createTime;

      console.log("new Memo created");
    }

    function removeElement(e) {
      if (e.key === "Escape") {
        $element.remove();
      }
    }

    function trackingMouse(e) {
      memoPos = getMousePos(e);
      $element.style.left = `${memoPos.x}px`;
      $element.style.top = `${memoPos.y}px`;
    }
  }
}
