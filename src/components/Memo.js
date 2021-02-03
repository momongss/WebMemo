"use strict";

import { getformattedTime } from "../utils/time.js";
import { getMousePos } from "../utils/eventHandler.js";

import { MEMOWIDTH, MEMOHEIGHT } from "../const/memoSize.js";

export default class Memo {
  pos = null;
  createTime = null;
  modifyTime = null;

  constructor(initPos) {
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
    window.addEventListener("keyup", removeElement);
    $element.addEventListener("click", stopTracking);
    $element.addEventListener("keyup", removeElement);

    document.body.appendChild($element);

    function stopTracking() {
      // 메모가 고정되면, 필요없는 이벤트 리스너들을 삭제
      window.removeEventListener("mousemove", trackingMouse);
      window.removeEventListener("keyup", removeElement);
      $element.removeEventListener("click", stopTracking);

      this.pos = { x: $element.style.left, y: $element.style.top };
      this.createTime = getformattedTime();
      this.modifyTime = this.createTime;

      console.log("new Memo created");
    }

    function removeElement(e) {
      if (e.key === "Escape") {
        $element.remove();
      }
    }

    function trackingMouse(e) {
      const pos = getMousePos(e);
      $element.style.left = `${pos.x}px`;
      $element.style.top = `${pos.y}px`;
    }
  }
}
